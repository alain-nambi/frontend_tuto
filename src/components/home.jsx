const Home = () => {
  const username = "Tiavina"; // (Tu peux le récupérer plus tard depuis ton backend)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Bienvenue sur la page d’accueil !
        </h1>
        <p className="text-gray-700 mb-4">
          Bonjour <span className="font-semibold">{username}</span> 👋,
          vous êtes maintenant connecté à votre espace.
        </p>

        <div className="space-y-2">
          <p className="text-gray-600">🌟 Explorez vos données sécurisées</p>
          <p className="text-gray-600">🧭 Naviguez dans les différentes sections</p>
          <p className="text-gray-600">⚙️ Personnalisez votre profil</p>
        </div>

        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

export default Home;
