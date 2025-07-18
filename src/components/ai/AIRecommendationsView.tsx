import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Brain, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Clock,
  AlertTriangle,
  CheckCircle,
  Zap
} from 'lucide-react'

const recommendations = [
  {
    id: '1',
    assetSymbol: 'BTC',
    assetName: 'Bitcoin',
    action: 'buy' as const,
    confidence: 87,
    reason: 'Strong technical indicators suggest a bullish breakout. RSI oversold conditions and increasing institutional adoption.',
    targetPrice: 48500,
    currentPrice: 43250,
    riskLevel: 'medium' as const,
    timeframe: '2-4 weeks',
    potentialReturn: 12.1
  },
  {
    id: '2',
    assetSymbol: 'AAPL',
    assetName: 'Apple Inc.',
    action: 'hold' as const,
    confidence: 72,
    reason: 'Earnings report shows steady growth but market conditions suggest consolidation period ahead.',
    targetPrice: 190,
    currentPrice: 185.50,
    riskLevel: 'low' as const,
    timeframe: '1-2 months',
    potentialReturn: 2.4
  },
  {
    id: '3',
    assetSymbol: 'TSLA',
    assetName: 'Tesla Inc.',
    action: 'sell' as const,
    confidence: 91,
    reason: 'Overvalued based on P/E ratio. Recent production issues and increased competition in EV market.',
    targetPrice: 220,
    currentPrice: 248.75,
    riskLevel: 'high' as const,
    timeframe: '3-6 weeks',
    potentialReturn: -11.5
  },
  {
    id: '4',
    assetSymbol: 'GOLD',
    assetName: 'Gold',
    action: 'buy' as const,
    confidence: 79,
    reason: 'Inflation hedge opportunity. Central bank policies and geopolitical tensions favor precious metals.',
    targetPrice: 2150,
    currentPrice: 2045,
    riskLevel: 'low' as const,
    timeframe: '2-3 months',
    potentialReturn: 5.1
  }
]

const aiInsights = [
  {
    title: 'Market Sentiment',
    value: 'Bullish',
    description: 'Overall market sentiment is positive with 68% of indicators showing upward momentum.',
    icon: TrendingUp,
    color: 'text-emerald-600'
  },
  {
    title: 'Risk Assessment',
    value: 'Moderate',
    description: 'Current portfolio risk level is well-balanced with good diversification.',
    icon: AlertTriangle,
    color: 'text-yellow-600'
  },
  {
    title: 'Rebalancing',
    value: 'Recommended',
    description: 'Consider reducing tech exposure and increasing commodity allocation.',
    icon: Target,
    color: 'text-blue-600'
  }
]

export function AIRecommendationsView() {
  const getActionColor = (action: string) => {
    switch (action) {
      case 'buy': return 'bg-emerald-100 text-emerald-800'
      case 'sell': return 'bg-red-100 text-red-800'
      case 'hold': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'high': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Recommendations</h1>
          <p className="text-slate-600 mt-2">Machine learning powered investment insights</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Zap className="h-4 w-4 mr-2" />
          Generate New Analysis
        </Button>
      </div>

      {/* AI Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiInsights.map((insight, index) => {
          const Icon = insight.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{insight.title}</CardTitle>
                <Icon className={`h-4 w-4 ${insight.color}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${insight.color}`}>{insight.value}</div>
                <p className="text-xs text-slate-600 mt-2">{insight.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recommendations List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Current Recommendations</h2>
        
        {recommendations.map((rec) => (
          <Card key={rec.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-slate-700">{rec.assetSymbol}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{rec.assetName}</h3>
                      <p className="text-sm text-slate-600">${rec.currentPrice.toLocaleString()}</p>
                    </div>
                    <Badge className={getActionColor(rec.action)}>
                      {rec.action.toUpperCase()}
                    </Badge>
                  </div>

                  <p className="text-slate-700 mb-4">{rec.reason}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Confidence</span>
                      <div className="font-semibold">{rec.confidence}%</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Target Price</span>
                      <div className="font-semibold">${rec.targetPrice.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Timeframe</span>
                      <div className="font-semibold">{rec.timeframe}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Potential Return</span>
                      <div className={`font-semibold ${
                        rec.potentialReturn >= 0 ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {rec.potentialReturn >= 0 ? '+' : ''}{rec.potentialReturn}%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-2 ml-4">
                  <Badge className={getRiskColor(rec.riskLevel)}>
                    {rec.riskLevel} risk
                  </Badge>
                  <div className="flex items-center text-xs text-slate-500">
                    <Brain className="h-3 w-3 mr-1" />
                    AI Confidence: {rec.confidence}%
                  </div>
                  <Button size="sm" className="mt-2">
                    {rec.action === 'buy' ? 'Buy Now' : rec.action === 'sell' ? 'Sell Now' : 'View Details'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="h-5 w-5 mr-2 text-emerald-600" />
            AI Analysis Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
              <div>
                <h4 className="font-medium">Portfolio Optimization</h4>
                <p className="text-sm text-slate-600">Your current allocation shows good diversification across asset classes. Consider increasing exposure to commodities for better inflation protection.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium">Market Timing</h4>
                <p className="text-sm text-slate-600">Current market conditions favor a gradual entry strategy. Dollar-cost averaging is recommended for new positions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Target className="h-5 w-5 text-purple-600 mt-0.5" />
              <div>
                <h4 className="font-medium">Risk Management</h4>
                <p className="text-sm text-slate-600">Maintain stop-loss orders at 8-10% below entry points. Consider taking profits on positions with 15%+ gains.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}