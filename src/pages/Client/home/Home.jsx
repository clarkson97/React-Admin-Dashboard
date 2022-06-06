function Layout({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '50px',
      }}
    >
      {children}
    </div>
  );
}

export default Layout;
