import * as dotenv from 'dotenv';
import {FundamentalsRepository} from './sma/fundamentals.repository';
import {TickerTapeTransformer} from './sma/tickertape.transformer';
import {FRGService} from './sma/finance.report.service';
import {tickerTapeCodes} from './stocks';
import emoji = require('node-emoji');
import fs = require('fs');

// tslint:disable
dotenv.config();

const roeThreshold = 10;
const deThreshold = 0.2;
const sector = 'Restaurants & Cafes';

const t = new TickerTapeTransformer();
const f = new FRGService();
const fundamentalsRepository = new FundamentalsRepository(t, f);

function checklist(report) {
  const financials = report['financials'];
  const years = Object.keys(financials)
    .sort()
    .reverse();
  const latestYear = years[0];
  const lastYearDE = financials[latestYear].debtToEquityRatio;
  // if (lastYearDE > deThreshold || lastYearDE < 0) {
  //   return false;
  // }
  const roes = years.map(year => financials[year].ROE).slice(0, 5);
  if (avg(roes) < roeThreshold) {
    return false;
  }
  return `Avg ROE: ${avg(roes)} , D/E: ${lastYearDE}`;
}

function printFinancials(data) {
  console.log(['Year', 'ROE', 'D/E', 'EPS', 'WCR'].join('\t|\t'));
  console.log('====================================================================');
  Object.keys(data).map(year => {
    const yearData = data[year];
    const line = [
      year,
      yearData.ROE.toFixed(2),
      yearData.debtToEquityRatio.toFixed(2),
      yearData.eps.toFixed(2),
      yearData.workingCapitalRatio.toFixed(2),
    ];
    console.log(line.join('\t|\t'));
  });
}

const avg = arr => {
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length || 0;
};

async function test(stock) {
  const id = stock.sid;
  const name = stock.stock.info.name;
  try {
    const report = (await fundamentalsRepository.report(id))[id];
    const result = checklist(report);
    if (result) {
      const line = emoji.emojify(`\nMatched :star: ${name}(${id}): ${result}\n`);
      fs.appendFile(`${sector.split(' ').join('')}.stock.txt`, line, () => {});
      console.log(line);
    }
  } catch (e) {
    console.log('error ' + e);
  }
}

const sectorWiseStocks = () => {
  const sectors = {};
  tickerTapeCodes.map(stock => {
    const sector = stock.stock.advancedRatios.subindustry;
    if (!sectors[sector]) {
      sectors[sector] = [stock];
    } else {
      sectors[sector].push(stock);
    }
  });
  return sectors;
};

const sectors = sectorWiseStocks();
sectors[sector].map(async stock => await test(stock));
