function App() {
  return (
    <>
      <Header />
      {/* -------Authorization------------
      Status-login/logout 
      UserType-passenger, Driver,All

      1.Profile page -  login + All
      2. Bus Info page - login + Driver
      2.Save ride History page - login + Passenger */}

      {/* Nested route  */}
      <Routes>
        {/* ------------------------------------------------------------Visible to all --------------------------------------------------  */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* id parameter in url is req */}
        <Route path="/details/:id" element={<Details/>} />
        {/* ------------------------------------------Visible to authorized person(Private route) ----------------------------------------  */}
        {/* 1. work for both with and without id parameter in url,i.e for add without id,update with id. 
            2. Status-login, UserType-Driver
        */}
        <Route
          path="/manageBus/:id?"
          element={<ProtectedRoute Cmp={<ManageBus/>} />}
        />
        {/*1.work for both with and without id parameter in url,i.e for display without id in url,update with id in url(input feild show).
           2.Status-login, UserType-All(Passenger/Driver)  */}
        <Route
          path="/profile/:id?"
          element={<ProtectedRoute Cmp={<Profile/>} />}
        />
        {/* Status-login, UserType-Passenger */}
        <Route
          path="/saveridehistory"
          element={<ProtectedRoute Cmp={<RideHistory/>} />}
        />
        {/* ------------------------------------------------Visible to all --------------------------------------------------------------  */}
        <Route path="/errorpage" element={<PageNotFound/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
            }
