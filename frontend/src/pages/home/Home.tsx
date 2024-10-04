import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
// import { AuthContext } from '../../context/AuthContext';
// import { useContext } from 'react';

const Home = () => {
  // const authContext = useContext(AuthContext);

  // if (!authContext) {
  //   return <div>Loading...</div>; // Handle case where AuthContext is null
  // }

  // const { authUser, setAuthUser, isLoading } = authContext;

  // if (isLoading) {
  //   return <div>Loading...</div>; // Display loading UI while auth data is being fetched
  // }

  // console.log(authUser, setAuthUser, isLoading);

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
