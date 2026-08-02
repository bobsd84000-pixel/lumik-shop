import React, { useState } from 'react';
import { Mail, Search, Copy, Shield, TrendingUp, Loader, AlertCircle } from 'lucide-react';

// LUMIK Customization: Kraft #8B7355, Tan #D4A574, Cream #FAF7F2
// Typo: Newsreader (heading) + Courier Prime (body)
export default function IntelBase() {
  const [email, setEmail] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);

  // Données simulées pour les résultats
  const generateResults = (emailAddress) => {
    const names = ['Alexandre Martin', 'Sophie Dubois', 'Jean Dupont', 'Marie Laurent', 'Pierre Moreau'];
    const companies = ['TechCorp', 'Digital Solutions', 'Cloud Systems', 'Data Analytics Inc', 'StartupXYZ'];
    const roles = ['Développeur', 'Product Manager', 'CTO', 'Data Scientist', 'Fondateur'];
    const cities = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux'];

    const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

    return {
      email: emailAddress,
      name: randomItem(names),
      company: randomItem(companies),
      role: randomItem(roles),
      location: randomItem(cities),
      phone: '+33 6 ' + Math.floor(Math.random() * 100000000).toString().padStart(8, '0'),
      linkedin: `linkedin.com/in/${emailAddress.split('@')[0].replace('.', '-')}`,
      risk_score: Math.floor(Math.random() * 100),
      verified: Math.random() > 0.4,
      sources: Math.floor(Math.random() * 15) + 3,
      lastUpdated: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR'),
    };
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setSearched(true);

    // Simulation du délai de recherche
    setTimeout(() => {
      const result = generateResults(email);
      setResults(result);
      setLoading(false);

      // Ajout à l'historique
      if (!history.find(h => h.email === email)) {
        setHistory([{ email, timestamp: new Date() }, ...history].slice(0, 5));
      }
    }, 800);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const RiskBadge = ({ score }) => {
    if (score < 30) return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Faible risque</span>;
    if (score < 70) return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Risque modéré</span>;
    return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Risque élevé</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" style={{ fontFamily: "'Courier Prime', monospace" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@400;600;800&family=Courier+Prime:wght@400;700&display=swap');`}</style>

      {/* Header */}
      <div className="border-b border-dashed border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-7 h-7" style={{ color: '#8B7355' }} />
              <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Newsreader', serif" }}>IntelBase</h1>
            </div>
            <div className="text-sm text-slate-600">Recherche OSINT avancée</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm border border-dashed border-slate-200 p-8 mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <label className="block text-sm font-medium text-slate-900 mb-3" style={{ fontFamily: "'Newsreader', serif" }}>
              Rechercher une adresse email
            </label>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  placeholder="exemple@domaine.fr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-dashed border-slate-300 rounded-lg focus:outline-none focus:ring-1 text-slate-900"
                  style={{ fontFamily: "'Courier Prime', monospace", "--tw-ring-color": '#8B7355' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#8B7355';
                    e.target.style.boxShadow = '0 0 0 1px #8B7355';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 text-white rounded-lg hover:opacity-90 disabled:opacity-50 font-medium flex items-center gap-2 transition-colors"
                style={{ backgroundColor: '#8B7355', fontFamily: "'Newsreader', serif" }}
              >
                {loading ? <Loader className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                Rechercher
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        {searched && (
          <>
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="text-center">
                  <Loader className="w-10 h-10 animate-spin mx-auto mb-4" style={{ color: '#8B7355' }} />
                  <p className="text-slate-600">Recherche en cours...</p>
                </div>
              </div>
            ) : results ? (
              <div className="space-y-6">
                {/* Profile Card */}
                <div className="bg-white rounded-lg shadow-sm border border-dashed border-slate-200 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-16 h-16 bg-gradient-to-br rounded-lg flex items-center justify-center text-white font-bold text-xl" style={{ backgroundImage: 'linear-gradient(to bottom right, #D4A574, #8B7355)' }}>
                        {results.name.charAt(0)}{results.name.split(' ')[1]?.charAt(0) || ''}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Newsreader', serif" }}>{results.name}</h2>
                        <p className="text-slate-600">{results.role}</p>
                        <p className="text-slate-500 text-sm mt-1">{results.company}</p>
                      </div>
                    </div>
                    <RiskBadge score={results.risk_score} />
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-dashed border-slate-200 pt-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Email</label>
                        <div className="flex items-center gap-2 mt-1">
                          <code className="text-sm text-slate-900 font-mono bg-slate-50 px-3 py-2 rounded flex-1" style={{ fontFamily: "'Courier Prime', monospace" }}>{results.email}</code>
                          <button
                            onClick={() => copyToClipboard(results.email)}
                            className="p-2 hover:bg-slate-100 rounded transition-colors"
                            title="Copier"
                          >
                            <Copy className="w-4 h-4 text-slate-600" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Localisation</label>
                        <p className="text-slate-900 mt-1">{results.location}, France</p>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Téléphone</label>
                        <p className="text-slate-900 mt-1 font-mono" style={{ fontFamily: "'Courier Prime', monospace" }}>{results.phone}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">LinkedIn</label>
                        <p className="mt-1 text-sm" style={{ color: '#8B7355' }}>{results.linkedin}</p>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Statut de vérification</label>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`w-2 h-2 rounded-full ${results.verified ? 'bg-green-500' : 'bg-slate-300'}`}></span>
                          <p className="text-slate-900">{results.verified ? 'Vérifié' : 'Non vérifié'}</p>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Score de risque</label>
                        <div className="mt-1">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-slate-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full transition-all ${
                                  results.risk_score < 30 ? 'bg-green-500' :
                                  results.risk_score < 70 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${results.risk_score}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-bold text-slate-900">{results.risk_score}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats */}
                  <div className="flex gap-6 border-t border-dashed border-slate-200 mt-6 pt-6">
                    <div className="flex items-center gap-2 text-slate-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">{results.sources} sources trouvées</span>
                    </div>
                    <div className="text-sm text-slate-500">
                      Mise à jour : {results.lastUpdated}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-dashed border-slate-200 p-8 text-center">
                <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-600">Aucun résultat trouvé pour cette adresse email.</p>
              </div>
            )}
          </>
        )}

        {/* Historique */}
        {history.length > 0 && (
          <div className="mt-12 bg-white rounded-lg shadow-sm border border-dashed border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4" style={{ fontFamily: "'Newsreader', serif" }}>Recherches récentes</h3>
            <div className="space-y-2">
              {history.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setEmail(item.email);
                    setSearched(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-slate-50 rounded-lg transition-colors text-slate-700 text-sm border-b border-dashed border-slate-100 last:border-0"
                >
                  {item.email}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Toast */}
      {copied && (
        <div className="fixed bottom-4 right-4 text-white px-4 py-3 rounded-lg shadow-lg text-sm" style={{ backgroundColor: '#8B7355' }}>
          Copié dans le presse-papiers
        </div>
      )}
    </div>
  );
}
