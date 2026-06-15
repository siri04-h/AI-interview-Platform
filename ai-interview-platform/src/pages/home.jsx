function Home() {
    const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Takes up the full screen height
    width: '100%',
    margin: 0
  };

  return (
    <div style={containerStyle}>
      <h1>AI Interview Preparation Platform</h1>
    </div>
  );
}

export default Home;