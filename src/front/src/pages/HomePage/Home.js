import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <button>
                <Link to="/preinterview">go</Link>
            </button>
        </div>
    );
};

export default Home;