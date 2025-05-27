import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ExclusiveArmadale from './components/ExclusiveArmadale'
import NeighbourhoodNews from './pages/NeighbourhoodNews'
import Footer from './components/Footer'
import TermsConditions from './components/TermsConditions'
import InnerCircle from './pages/InnerCircle'
import VictorChurchillCampaign from './pages/campaigns/victor-churchill-1'
import ScanlanTheodoreCampaign from './pages/campaigns/scanlan-theodore-2'
import SkinAngelCampaign from './pages/campaigns/skin-angel-3'
import RinasCucinaCampaign from './pages/campaigns/rinas-cucina-4'
import EtAlCampaign from './pages/campaigns/et-al-5'
import JamesSaidCampaign from './pages/campaigns/james-said-6'
import Story1 from './pages/stories/story-1'
import Story2 from './pages/stories/story-2'
import Story3 from './pages/stories/story-3'
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Banner */}
        <div className="bg-black text-white text-sm md:text-lg py-1 md:py-2 text-center">
          <p>This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.</p>
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <ExclusiveArmadale />
                <NeighbourhoodNews showViewAll={true} />
              </>
            } />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/inner-circle" element={<InnerCircle />} />
            <Route path="/stories" element={<NeighbourhoodNews showViewAll={false} />} />
            <Route path="/campaigns/victor-churchill-1" element={<VictorChurchillCampaign />} />
            <Route path="/campaigns/scanlan-theodore-2" element={<ScanlanTheodoreCampaign />} />
            <Route path="/campaigns/skin-angel-3" element={<SkinAngelCampaign />} />
            <Route path="/campaigns/rinas-cucina-4" element={<RinasCucinaCampaign />} />
            <Route path="/campaigns/et-al-5" element={<EtAlCampaign />} />
            <Route path="/campaigns/james-said-6" element={<JamesSaidCampaign />} />
            <Route path="/stories/story-1" element={<Story1 />} />
            <Route path="/stories/story-2" element={<Story2 />} />
            <Route path="/stories/story-3" element={<Story3 />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
