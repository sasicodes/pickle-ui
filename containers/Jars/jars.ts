import { PriceIds } from "../Prices";
import { NETWORK_NAMES } from "containers/config";

export const PICKLE_JARS = {
  psCRV: "0x68d14d66B2B0d6E157c06Dc8Fefa3D8ba0e66a89",
  prenBTCWBTC: "0x2E35392F4c36EBa7eCAFE4de34199b2373Af22ec",
  p3CRV: "0x1BB74b5DdC1f4fC91D6f9E7906cf68bc93538e33",
  psteCRV: "0x77c8a58d940a322aea02dbc8ee4a30350d4239ad",
  pSUSHIETHDAI: "0x55282da27a3a02ffe599f6d11314d239dac89135",
  pSUSHIETHUSDC: "0x8c2d16b7f6d3f989eb4878ecf13d695a7d504e43",
  pSUSHIETHUSDT: "0xa7a37ae5cb163a3147de83f15e15d8e5f94d6bce",
  pSUSHIETHWBTC: "0xde74b6c547bd574c3527316a2ee30cd8f6041525",
  pSUSHIETHYFI: "0x3261D9408604CC8607b687980D40135aFA26FfED",
  pSUSHIETHYVECRV: "0x5Eff6d166D66BacBC1BF52E2C54dD391AE6b1f48",
  pSUSHIETH: "0xECb520217DccC712448338B0BB9b08Ce75AD61AE",
  pSUSHIETHALCX: "0x9eb0aAd5Bb943D3b2F7603Deb772faa35f60aDF9",
  pUNIETHDAI: "0xCffA068F1E44D98D3753966eBd58D4CFe3BB5162",
  pUNIETHUSDC: "0x53Bf2E62fA20e2b4522f05de3597890Ec1b352C6",
  pUNIETHUSDT: "0x09FC573c502037B149ba87782ACC81cF093EC6ef",
  pUNIETHWBTC: "0xc80090AA05374d336875907372EE4ee636CBC562",
  pUNIMIRUST: "0x3bcd97dca7b1ced292687c97702725f37af01cac",
  pUNIMTSLAUST: "0xaFB2FE266c215B5aAe9c4a9DaDC325cC7a497230",
  pUNIMAAPLUST: "0xF303B35D5bCb4d9ED20fB122F5E268211dEc0EBd",
  pUNIMQQQUST: "0x7C8de3eE2244207A54b57f45286c9eE1465fee9f",
  pUNIMSLVUST: "0x1ed1fD33b62bEa268e527A622108fe0eE0104C07",
  pUNIMBABAUST: "0x1CF137F651D8f0A4009deD168B442ea2E870323A",
  pUNIFEITRIBE: "0xC1513C1b0B359Bc5aCF7b772100061217838768B",
  pUNIETHLUSD: "0x927e3bCBD329e89A8765B52950861482f0B227c4",
  pyvBOOSTETH: "0xCeD67a187b923F0E5ebcc77C7f2F7da20099e378",
  pDAI: "0x6949Bb624E8e8A90F87cD2058139fcd77D2F3F87",
  pySTETHCRV: "0x72e0317134a9a6fF0675938733343da96d3354e7",
  pyUSDC: "0xEB801AB73E9A2A482aA48CaCA13B1954028F4c94",
  pyLUSDCRV: "0x4fFe73Cf2EEf5E8C8E0E10160bCe440a029166D2",
  pSUSHICVXETH: "0xDCfAE44244B3fABb5b351b01Dc9f050E589cF24F",
  pLQTY: "0x65B2532474f717D5A8ba38078B78106D56118bbb",
  pALETH: "0xCbA1FE4Fdbd90531EFD929F1A1831F38e91cff1e",

  // Polygon Jars
  pCOMETHUSDCWETH: "0x9eD7e3590F2fB9EEE382dfC55c71F9d3DF12556c",
  pCOMETHPICKLEMUST: "0x7512105DBb4C0E0432844070a45B7EA0D83a23fD",
  pCOMETHMATICMUST: "0x91bcc0BBC2ecA760e3b8A79903CbA53483A7012C",
  pAAVEDAI: "0x0519848e57Ba0469AA5275283ec0712c91e20D8E",
  pAM3CRV: "0x261b5619d85B710f1c2570b65ee945975E2cC221",
  ppSUSHIETHUSDT: "0x80aB65b1525816Ffe4222607EDa73F86D211AC95",
  ppSUSHIMATICETH: "0xd438Ba7217240a378238AcE3f44EFaaaF8aaC75A",
  pQUICKmiMATICUSDC: "0xf12BB9dcD40201b5A110e11E38DcddF4d11E6f83",
};

export const JAR_DEPOSIT_TOKENS = {
  [NETWORK_NAMES.ETH]: {
    SUSHI_ETH_ALCX: "0xC3f279090a47e80990Fe3a9c30d24Cb117EF91a8",
    UNIV2_FEI_TRIBE: "0x9928e4046d7c6513326cCeA028cD3e7a91c7590A",
    UNIV2_MIR_UST: "0x87dA823B6fC8EB8575a235A824690fda94674c88",
    UNIV2_MTSLA_UST: "0x5233349957586A8207c52693A959483F9aeAA50C",
    UNIV2_MAAPL_UST: "0xB022e08aDc8bA2dE6bA4fECb59C6D502f66e953B",
    UNIV2_MQQQ_UST: "0x9E3B47B861B451879d43BBA404c35bdFb99F0a6c",
    UNIV2_MSLV_UST: "0x860425bE6ad1345DC7a3e287faCBF32B18bc4fAe",
    UNIV2_MBABA_UST: "0x676Ce85f66aDB8D7b8323AeEfe17087A3b8CB363",
    UNIV2_LUSD_ETH: "0xF20EF17b889b437C151eB5bA15A47bFc62bfF469",
    SUSHI_ETH_YVECRV: "0x10B47177E92Ef9D5C6059055d92DdF6290848991",
    SUSHI_ETH_YVBOOST: "0x9461173740D27311b176476FA27e94C681b1Ea6b",
    steCRV: "0x06325440D014e39736583c165C2963BA99fAf14E",
    SUSHI_ETH_DAI: "0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f",
    SUSHI_ETH_USDC: "0x397FF1542f962076d0BFE58eA045FfA2d347ACa0",
    SUSHI_ETH_USDT: "0x06da0fd433C1A5d7a4faa01111c044910A184553",
    SUSHI_ETH_WBTC: "0xCEfF51756c56CeFFCA006cD410B03FFC46dd3a58",
    SUSHI_ETH_YFI: "0x088ee5007C98a9677165D78dD2109AE4a3D04d0C",
    SUSHI_ETH: "0x795065dCc9f64b5614C407a6EFDC400DA6221FB0",
    sCRV: "0xC25a3A3b969415c80451098fa907EC722572917F",
    renCRV: "0x49849C98ae39Fff122806C06791Fa73784FB3675",
    "3CRV": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
    UNIV2_ETH_DAI: "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11",
    UNIV2_ETH_USDC: "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
    UNIV2_ETH_USDT: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
    UNIV2_ETH_WBTC: "0xBb2b8038a1640196FbE3e38816F3e67Cba72D940",
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    lusdCRV: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
    SUSHI_CVX_ETH: "0x05767d9EF41dC40689678fFca0608878fb3dE906",
    LQTY: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
    ALETH: "0xc9da65931ABf0Ed1b74Ce5ad8c041C4220940368",
  },
  [NETWORK_NAMES.POLY]: {
    COMETH_USDC_WETH: "0x1Edb2D8f791D2a51D56979bf3A25673D6E783232",
    COMETH_PICKLE_MUST: "0xb0b5e3bd18eb1e316bcd0bba876570b3c1779c55",
    COMETH_MATIC_MUST: "0x80676b414a905de269d0ac593322af821b683b92",
    DAI: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    AM3CRV: "0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171",
    POLY_SUSHI_ETH_USDT: "0xc2755915a85c6f6c1c0f3a86ac8c058f11caa9c9",
    POLY_SUSHI_MATIC_ETH: "0xc4e595acdd7d12fec385e5da5d43160e8a0bac0e",
    QUICK_MIMATIC_USDC: "0x160532d2536175d65c03b97b0630a9802c274dad",
  },
};

export const DEPOSIT_TOKENS_NAME = {
  sCRV: "sCRV",
  renCRV: "renBTCCRV",
  "3CRV": "3poolCRV",
  steCRV: "steCRV (ETH-stETH)",
  UNIV2_ETH_DAI: "UNI DAI/ETH",
  UNIV2_ETH_USDC: "UNI USDC/ETH",
  UNIV2_ETH_USDT: "UNI USDT/ETH",
  UNIV2_ETH_WBTC: "UNI WBTC/ETH",
  UNIV2_MIR_UST: "UNI MIR/UST",
  UNIV2_MTSLA_UST: "UNI MTSLA/UST",
  UNIV2_MAAPL_UST: "UNI MAAPL/UST",
  UNIV2_MQQQ_UST: "UNI MQQQ/UST",
  UNIV2_MSLV_UST: "UNI MSLV/UST",
  UNIV2_MBABA_UST: "UNI MBABA/UST",
  UNIV2_FEI_TRIBE: "UNI FEI/TRIBE",
  UNIV2_LUSD_ETH: "UNI ETH/LUSD",
  SUSHI_ETH_DAI: "SLP DAI/ETH",
  SUSHI_ETH_USDC: "SLP USDC/ETH",
  SUSHI_ETH_USDT: "SLP USDT/ETH",
  SUSHI_ETH_WBTC: "SLP WBTC/ETH",
  SUSHI_ETH_YFI: "SLP YFI/ETH",
  SUSHI_ETH_YVECRV: "SLP YVECRV/ETH",
  SUSHI_ETH: "SLP SUSHI/ETH",
  SUSHI_ETH_YVBOOST: "SLP YVBOOST/ETH",
  SUSHI_ETH_ALCX: "SLP ALCX/ETH",
  USDC: "USDC",
  lusdCRV: "lusdCRV",
  SUSHI_CVX_ETH: "SLP CVX/ETH",
  LQTY: "LQTY",
  ALETH: "Saddle WETH/alETH/sETH",

  // Polygon Jars
  COMETH_USDC_WETH: "COMETH USDC/WETH",
  COMETH_PICKLE_MUST: "COMETH PICKLE/MUST",
  COMETH_MATIC_MUST: "COMETH MATIC/MUST",
  DAI: "DAI",
  AM3CRV: "am3CRV",
  POLY_SUSHI_ETH_USDT: "SLP USDT/ETH",
  POLY_SUSHI_MATIC_ETH: "SLP MATIC/ETH",
  QUICK_MIMATIC_USDC: "QUICK MAI/USDC",
};

export const JAR_ACTIVE: Record<string, boolean> = {
  [DEPOSIT_TOKENS_NAME.sCRV]: true,
  [DEPOSIT_TOKENS_NAME.renCRV]: true,
  [DEPOSIT_TOKENS_NAME["3CRV"]]: true,
  [DEPOSIT_TOKENS_NAME.steCRV]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_ETH_DAI]: false,
  [DEPOSIT_TOKENS_NAME.UNIV2_ETH_USDC]: false,
  [DEPOSIT_TOKENS_NAME.UNIV2_ETH_USDT]: false,
  [DEPOSIT_TOKENS_NAME.UNIV2_ETH_WBTC]: false,
  [DEPOSIT_TOKENS_NAME.UNIV2_MTSLA_UST]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_MAAPL_UST]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_MQQQ_UST]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_MSLV_UST]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_MBABA_UST]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_MIR_UST]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_FEI_TRIBE]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_LUSD_ETH]: false,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_DAI]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_USDC]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_USDT]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_WBTC]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_YFI]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_YVECRV]: false,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_YVBOOST]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_ALCX]: true,
  [DEPOSIT_TOKENS_NAME.USDC]: true,
  [DEPOSIT_TOKENS_NAME.lusdCRV]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_CVX_ETH]: true,
  [DEPOSIT_TOKENS_NAME.ALETH]: true,

  // Polygon Jars
  [DEPOSIT_TOKENS_NAME.COMETH_USDC_WETH]: true,
  [DEPOSIT_TOKENS_NAME.COMETH_PICKLE_MUST]: true,
  [DEPOSIT_TOKENS_NAME.COMETH_MATIC_MUST]: true,
  [DEPOSIT_TOKENS_NAME.DAI]: true,
  [DEPOSIT_TOKENS_NAME.AM3CRV]: true,
  [DEPOSIT_TOKENS_NAME.POLY_SUSHI_ETH_USDT]: true,
  [DEPOSIT_TOKENS_NAME.POLY_SUSHI_MATIC_ETH]: true,
  [DEPOSIT_TOKENS_NAME.QUICK_MIMATIC_USDC]: true,
  [DEPOSIT_TOKENS_NAME.LQTY]: true,
};

export const JAR_YEARN: Record<string, boolean> = {
  [DEPOSIT_TOKENS_NAME.USDC]: true,
  [DEPOSIT_TOKENS_NAME.lusdCRV]: true,
};

export const DEPOSIT_TOKENS_LINK = {
  sCRV: "https://www.curve.fi/susdv2/deposit",
  renCRV: "https://www.curve.fi/ren/deposit",
  "3CRV": "https://www.curve.fi/3pool/deposit",
  steCRV: "https://www.curve.fi/steth/deposit",
  UNIV2_ETH_DAI:
    "https://app.uniswap.org/#/add/v2/0x6b175474e89094c44da98b954eedeac495271d0f/ETH",
  UNIV2_ETH_USDC:
    "https://app.uniswap.org/#/add/v2/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/ETH",
  UNIV2_ETH_USDT:
    "https://app.uniswap.org/#/add/v2/ETH/0xdac17f958d2ee523a2206206994597c13d831ec7",
  UNIV2_ETH_WBTC:
    "https://app.uniswap.org/#/add/v2/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599/ETH",
  UNIV2_MIR_UST:
    "https://app.uniswap.org/#/add/v2/0x09a3ecafa817268f77be1283176b946c4ff2e608/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
  UNIV2_MTSLA_UST:
    "https://app.uniswap.org/#/add/v2/0x21cA39943E91d704678F5D00b6616650F066fD63/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
  UNIV2_MAAPL_UST:
    "https://app.uniswap.org/#/add/v2/0xd36932143F6eBDEDD872D5Fb0651f4B72Fd15a84/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
  UNIV2_MQQQ_UST:
    "https://app.uniswap.org/#/add/v2/0x13B02c8dE71680e71F0820c996E4bE43c2F57d15/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
  UNIV2_MSLV_UST:
    "https://app.uniswap.org/#/add/v2/0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
  UNIV2_MBABA_UST:
    "https://app.uniswap.org/#/add/v2/0x56aA298a19C93c6801FDde870fA63EF75Cc0aF72/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
  UNIV2_FEI_TRIBE:
    "https://app.uniswap.org/#/add/v2/0x956f47f50a910163d8bf957cf5846d573e7f87ca/0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
  UNIV2_LUSD_ETH:
    "https://app.uniswap.org/#/add/v2/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0/ETH",
  SUSHI_MIC_USDT:
    "https://exchange.sushiswapclassic.org/#/add/0x368B3a58B5f49392e5C9E4C998cb0bB966752E51/0xdAC17F958D2ee523a2206206994597C13D831ec7",
  SUSHI_MIS_USDT:
    "https://exchange.sushiswapclassic.org/#/add/0x4b4D2e899658FB59b1D518b68fe836B100ee8958/0xdAC17F958D2ee523a2206206994597C13D831ec7",
  SUSHI_ETH_DAI:
    "https://exchange.sushiswapclassic.org/#/add/0x6b175474e89094c44da98b954eedeac495271d0f/ETH",
  SUSHI_ETH_USDC:
    "https://exchange.sushiswapclassic.org/#/add/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/ETH",
  SUSHI_ETH_USDT:
    "https://exchange.sushiswapclassic.org/#/add/ETH/0xdac17f958d2ee523a2206206994597c13d831ec7",
  SUSHI_ETH_WBTC:
    "https://exchange.sushiswapclassic.org/#/add/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599/ETH",
  SUSHI_ETH_YFI:
    "https://exchange.sushiswapclassic.org/#/add/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/ETH",
  SUSHI_ETH_YVECRV:
    "https://exchange.sushiswapclassic.org/#/add/0xc5bddf9843308380375a611c18b50fb9341f502a/ETH",
  SUSHI_ETH_YVBOOST:
    "https://exchange.sushiswapclassic.org/#/add/0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a/ETH",
  SUSHI_ETH:
    "https://exchange.sushiswapclassic.org/#/add/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2/ETH",
  SUSHI_ETH_ALCX:
    "https://app.sushi.com/add/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/0xdbdb4d16eda451d0503b854cf79d55697f90c8df",
  SUSHI_CVX_ETH:
    "https://app.sushi.com/add/0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b/ETH",
  USDC: "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  lusdCRV: "https://curve.fi/lusd/deposit",
  LQTY:
    "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
  ALETH: "https://app.alchemix.fi/transmute",
  // Polygon Jars
  COMETH_USDC_WETH:
    "https://swap.cometh.io/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  COMETH_PICKLE_MUST:
    "https://swap.cometh.io/#/add/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f/0x2b88ad57897a8b496595925f43048301c37615da",
  COMETH_MATIC_MUST:
    "https://swap.cometh.io/#/add/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  DAI:
    "https://polygonscan.com/token/0x8f3cf7ad23cd3cadbd9735aff958023239c6a063?a=0x5143e71982a2d5dc63a77f0a5611685cf13c5aaf",
  AM3CRV: "https://polygon.curve.fi/aave/deposit",
  POLY_SUSHI_ETH_USDT:
    "https://app.sushi.com/#/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  POLY_SUSHI_MATIC_ETH:
    "https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  QUICK_MIMATIC_USDC:
    "https://quickswap.exchange/#/add/0xa3Fa99A148fA48D14Ed51d610c367C61876997F1/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
};

export const DEPOSIT_TOKENS_JAR_NAMES = {
  sCRV: "pJar 0a",
  renCRV: "pJar 0b",
  "3CRV": "pJar 0c",
  steCRV: "pJar 0d",
  UNIV2_ETH_DAI: "pJar 0.69a",
  UNIV2_ETH_USDC: "pJar 0.69b",
  UNIV2_ETH_USDT: "pJar 0.69c",
  UNIV2_ETH_WBTC: "pJar 0.69d",
  SUSHI_MIC_USDT: "pJar 0.99g",
  SUSHI_MIS_USDT: "pJar 0.99h",
  UNIV2_MIR_UST: "pJar 0.99k",
  UNIV2_MTSLA_UST: "pJar 0.99l",
  UNIV2_MAAPL_UST: "pJar 0.99m",
  UNIV2_MQQQ_UST: "pJar 0.99n",
  UNIV2_MSLV_UST: "pJar 0.99o",
  UNIV2_MBABA_UST: "pJar 0.99p",
  UNIV2_FEI_TRIBE: "pJar 0.99r",
  UNIV2_LUSD_ETH: "pJar 0.99u",
  sCRV_OLD: "pJar 0 (old)",
  UNIV2_ETH_DAI_OLD: "pJar 0.69a (old)",
  UNIV2_ETH_USDC_OLD: "pJar 0.69b (old)",
  UNIV2_ETH_USDT_OLD: "pJar 0.69c (old)",
  SUSHI_ETH_DAI: "pJar 0.99a",
  SUSHI_ETH_USDC: "pJar 0.99b",
  SUSHI_ETH_USDT: "pJar 0.99c",
  SUSHI_ETH_WBTC: "pJar 0.99d",
  SUSHI_ETH_YFI: "pJar 0.99e",
  SUSHI_ETH_YVECRV: "pJar 0.99i",
  SUSHI_ETH_YVBOOST: "pJar 0.99y",
  SUSHI_ETH: "pJar 0.99q",
  SUSHI_ETH_ALCX: "pJar 0.99x",
  SUSHI_CVX_ETH: "pJar 0.99z",
  USDC: "pJar Y-1",
  lusdCRV: "pJar Y-2",
  LQTY: "pJar 0.98l",
  ALETH: "pJar 0.99al",

  // Polygon Jars
  COMETH_USDC_WETH: "polyJar 1a",
  COMETH_PICKLE_MUST: "polyJar 1b",
  COMETH_MATIC_MUST: "polyJar 1c",
  DAI: "polyJar 2a",
  AM3CRV: "polyJar 3a",
  POLY_SUSHI_ETH_USDT: "polyJar 4a",
  POLY_SUSHI_MATIC_ETH: "polyJar 4b",
  QUICK_MIMATIC_USDC: "polyJar 5a",
};

export const STRATEGY_NAMES = {
  DAI: {
    COMPOUNDv1: "StrategyCompoundDaiV1",
    COMPOUNDv2: "StrategyCmpdDaiV2",
  },
};

const PRICE_IDS: Record<string, PriceIds> = {
  // Ethereum
  "0x6b175474e89094c44da98b954eedeac495271d0f": "dai",
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "usdc",
  "0xdac17f958d2ee523a2206206994597c13d831ec7": "usdt",
  "0x57ab1ec28d129707052df4df418d58a2d46d5f51": "susd",
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "eth",
  "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": "wbtc",
  "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e": "yfi",
  "0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a": "bac",
  "0x368b3a58b5f49392e5c9e4c998cb0bb966752e51": "mic",
  "0x4b4d2e899658fb59b1d518b68fe836b100ee8958": "mis",
  "0x5a98fcbea516cf06857215779fd812ca3bef1b32": "ldo",
  "0xc5bddf9843308380375a611c18b50fb9341f502a": "yvecrv",
  "0x106538cc16f938776c7c180186975bca23875287": "bas",
  "0x09a3ecafa817268f77be1283176b946c4ff2e608": "mir",
  "0xa47c8bf37f92abed4a126bda807a7b7498661acd": "ust",
  "0x21ca39943e91d704678f5d00b6616650f066fd63": "mtsla",
  "0xd36932143f6ebdedd872d5fb0651f4b72fd15a84": "maapl",
  "0x13b02c8de71680e71f0820c996e4be43c2f57d15": "mqqq",
  "0x9d1555d8cb3c846bb4f7d5b1b1080872c3166676": "mslv",
  "0x56aa298a19c93c6801fdde870fa63ef75cc0af72": "mbaba",
  "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2": "sushi",
  "0x956f47f50a910163d8bf957cf5846d573e7f87ca": "fei",
  "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b": "tribe",
  "0x5f98805a4e8be255a32880fdec7f6728c6568ba0": "lusd",
  "0xdbdb4d16eda451d0503b854cf79d55697f90c8df": "alcx",
  "0x92bf969865c80eda082fd5d8b4e28da4d58e1c3a": "luna",
  "0x9d409a0a012cfba9b15f6d4b36ac57a46966ab9a": "yvboost",
  "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b": "cvx",
  "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d": "lqty",
  "0x0100546f2cd4c9d97f798ffc9755e47865ff7ee6": "aleth",

  // Polygon
  "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": "usdc",
  "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619": "eth",
  "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063": "dai",
  "0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f": "must",
  "0x2b88ad57897a8b496595925f43048301c37615da": "pickle",
  "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270": "matic",
  "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a": "sushi",
  "0xc2132d05d31c914a87c6611c10748aeb04b58e8f": "usdt",
  "0xa3fa99a148fa48d14ed51d610c367c61876997f1": "mimatic",
  "0x580a84c73811e1839f75d86d75d88cca0c241ff4": "qi",
};

export const getPriceId = (tokenAddress: string): PriceIds => {
  const l = tokenAddress.toLowerCase();

  if (PRICE_IDS[l]) return PRICE_IDS[l];
  throw new Error(`Unknown token address: ${tokenAddress}`);
};
