export interface Asset {
  id: string
  symbol: string
  name: string
  price: number
  change24h: number
  marketCap: number
  volume24h: number
  type: 'crypto' | 'stock' | 'commodity'
}

export interface PortfolioItem {
  id: string
  assetId: string
  symbol: string
  name: string
  quantity: number
  avgPrice: number
  currentPrice: number
  value: number
  change: number
  changePercent: number
}

export interface AIRecommendation {
  id: string
  assetSymbol: string
  assetName: string
  action: 'buy' | 'sell' | 'hold'
  confidence: number
  reason: string
  targetPrice: number
  riskLevel: 'low' | 'medium' | 'high'
  timeframe: string
}

export interface Transaction {
  id: string
  assetSymbol: string
  type: 'buy' | 'sell'
  quantity: number
  price: number
  total: number
  timestamp: string
  status: 'completed' | 'pending' | 'failed'
}