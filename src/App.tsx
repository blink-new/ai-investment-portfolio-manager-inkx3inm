import { useState, useEffect } from 'react'
import { blink } from './blink/client'
import { Sidebar } from './components/layout/Sidebar'
import { DashboardView } from './components/dashboard/DashboardView'
import { AIRecommendationsView } from './components/ai/AIRecommendationsView'
import { Loader2 } from 'lucide-react'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-emerald-600" />
          <p className="text-slate-600">Loading your portfolio...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">AI Investment Portfolio</h1>
          <p className="text-xl text-slate-300 mb-8">Smart investing powered by machine learning</p>
          <p className="text-slate-400">Please sign in to access your portfolio</p>
        </div>
      </div>
    )
  }

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />
      case 'ai-recommendations':
        return <AIRecommendationsView />
      case 'portfolio':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-900">Portfolio</h1>
            <p className="text-slate-600">Detailed portfolio view coming soon...</p>
          </div>
        )
      case 'market':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-900">Market</h1>
            <p className="text-slate-600">Real-time market data coming soon...</p>
          </div>
        )
      case 'trading':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-900">Trading</h1>
            <p className="text-slate-600">Trading interface coming soon...</p>
          </div>
        )
      case 'profile':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-900">Profile</h1>
            <p className="text-slate-600">User profile settings coming soon...</p>
          </div>
        )
      default:
        return <DashboardView />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 lg:ml-64">
        <div className="p-6 lg:p-8 pt-16 lg:pt-8">
          {renderActiveView()}
        </div>
      </main>
    </div>
  )
}

export default App