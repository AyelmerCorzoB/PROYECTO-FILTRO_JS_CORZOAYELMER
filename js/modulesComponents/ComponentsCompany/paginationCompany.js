import { getCompany } from "../../modules/company.js";
import { 
    informationCompany,
    informationCenterCarrusel,
    informationCenterElonk,
    informationIzquierdaCard1,
    informationIzquierdaCard2,
    informationCenterSummary,
    informationDerecha,
    informationIcons
    
 } from "./informationCompany.js";


const fetchCompanyId = async () => {
    let company = await getCompany(); 
    await informationCompany(company.name)
    await informationIzquierdaCard1(
            company.headquarters_address,
            company.headquarters_city,
            company.headquarters_state);
    await informationIzquierdaCard2(company.website, company.flickr , company.twitter)
    await informationCenterCarrusel()
    await informationCenterElonk(company.ceo, company.cto)
    await informationCenterSummary(company.summary)
    await informationDerecha(
            company.founder, 
            company.founded,
            company.employees,
            company.vehicles,
            company.launch_sites,
            company.test_sites,
            company.valuation)
            await informationIcons(company.website,company.twitter,company.elon_twitter)
};

fetchCompanyId()