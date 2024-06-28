import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Cards from './components/cards/Cards';
import Main from './components/main/Main'
import MainCards from './components/mainCards/mainCards'
import QuestionSection from './components/questionsSection/Questions'
import Footer from './components/footer/Footer';



import './App.css';
import Flexible from './components/flexibleSection/Flexible';

const App = () => {


    return (
        <div>
            <Header />
            <Hero />
            <Cards />
            <Main />
            <MainCards />
            <Flexible />
            <QuestionSection />
            <Footer />
        </div>
    );
}

export default App;
