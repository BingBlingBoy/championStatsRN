import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/home/Index";
import Header from "./components/Header";
import Footer from "./components/Footer"
import SearchResults from "./pages/search/SearchResults"

function App() {
    
    // const queryClient = new QueryClient({defaultOptions: {
    //     queries: {
    //         refetchOnWindowFocus: false
    //     }
    // 
    // }});
    

    const content = (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/sign-in"  />
                    <Route path="/sign-up"  />
                    <Route path="/search" element={<SearchResults />}/>
                    <Route path="/searchNoUser"  />
                    <Route path="" >
                        <Route path="/profile"  />
                    </Route>
                    <Route path="*" element={ <h1 className="font-bold text-3xl">ERROR 404</h1> }/>
                </Routes>
            </Router>
            <Footer />
        </>
 
    );

    return content;
}


export default App
