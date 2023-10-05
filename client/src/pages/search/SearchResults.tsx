import axios from "axios";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

const SearchResults = () => {

    const { state } = useLocation();
    
    const { responseData } = useQuery({queryKey: ["Champion"], queryFn: () => {
        axios
            .get(`https://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion/${state.searchInput}.json`)
            .then((response) => {
                console.log(response.data);
            })
    }})

    const content = (
        <>

        </>
    );

    return content
}
export default SearchResults
