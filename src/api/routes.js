
/**
 * API Routes configuration
 */
const express = require('express');
const fixedDeposits = require('./fixedDeposits');
const savingsAccounts = require('./savingsAccounts');
const sipInvestments = require('./sipInvestments');
const stocks = require('./stocks');
const providentFunds = require('./providentFunds');
const auditRecords = require('./auditRecords');

const router = express.Router();

// Fixed Deposits routes
router.get('/fixed-deposits', fixedDeposits.getAllFixedDeposits);
router.get('/fixed-deposits/:id', fixedDeposits.getFixedDepositById);
router.post('/fixed-deposits', fixedDeposits.createFixedDeposit);
router.put('/fixed-deposits/:id', fixedDeposits.updateFixedDeposit);
router.delete('/fixed-deposits/:id', fixedDeposits.deleteFixedDeposit);

// Savings Accounts routes
router.get('/savings-accounts', savingsAccounts.getAllSavingsAccounts);
router.get('/savings-accounts/:id', savingsAccounts.getSavingsAccountById);
router.post('/savings-accounts', savingsAccounts.createSavingsAccount);
router.put('/savings-accounts/:id', savingsAccounts.updateSavingsAccount);
router.delete('/savings-accounts/:id', savingsAccounts.deleteSavingsAccount);

// SIP Investments routes
router.get('/sip-investments', sipInvestments.getAllSIPInvestments);
router.get('/sip-investments/:id', sipInvestments.getSIPInvestmentById);
router.post('/sip-investments', sipInvestments.createSIPInvestment);
router.put('/sip-investments/:id', sipInvestments.updateSIPInvestment);
router.delete('/sip-investments/:id', sipInvestments.deleteSIPInvestment);

// Stocks routes
router.get('/stocks', stocks.getAllStocks);
router.get('/stocks/:id', stocks.getStockById);
router.post('/stocks', stocks.createStock);
router.put('/stocks/:id', stocks.updateStock);
router.delete('/stocks/:id', stocks.deleteStock);

// Provident Funds routes
router.get('/provident-funds', providentFunds.getAllProvidentFunds);
router.get('/provident-funds/:id', providentFunds.getProvidentFundById);
router.post('/provident-funds', providentFunds.createProvidentFund);
router.put('/provident-funds/:id', providentFunds.updateProvidentFund);
router.delete('/provident-funds/:id', providentFunds.deleteProvidentFund);

// Audit Records routes
router.get('/audit-records', auditRecords.getAllAuditRecords);
router.get('/audit-records/entity/:entityId', auditRecords.getAuditRecordsByEntityId);
router.get('/audit-records/type/:entityType', auditRecords.getAuditRecordsByEntityType);

module.exports = router;
