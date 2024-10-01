import { getCompany } from "../../modules/company.js";
import { 
    informationIzquierdaCard1,
    informationIzquierdaCard2,
    
 } from "./informationCompany.js";


const fetchCompanyId = async () => {
    
    let company = await getCompany(); 

    await informationIzquierdaCard1(company.headquarters_address,company.headquarters_city,company.headquarters_state);
    await informationIzquierdaCard2(company.website, company.flickr , company.twitter)
};

fetchCompanyId()