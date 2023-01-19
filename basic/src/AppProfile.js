import "./App.css";
import Profile from "./components/Profile";
function AppProfile() {
  return (
    <>
      <Profile
        image="https://avatars.githubusercontent.com/u/70185607?s=400&u=d2a1c969e915eb8ce399c9bed70fce99adbcce47&v=4"
        name="HyunHwa Yang"
        job="프론트앤드 개발자"
        isNew={true}
      />
      <Profile
        image="https://avatars.githubusercontent.com/u/70185607?s=400&u=d2a1c969e915eb8ce399c9bed70fce99adbcce47&v=4"
        name="다른사람"
        job="백앤드 개발자"
        isNew={false}
      />
    </>
  );
}

export default AppProfile;
