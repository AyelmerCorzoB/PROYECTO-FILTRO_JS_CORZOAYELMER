import { getCompany } from "../../modules/company.js";
import { informationCompany } from "./informationCompany.js";


const fetchCompanyId = async () => {
    
    let company = await getCompany(); 

    await informationCompany(company.name, company.founder);
};

fetchCompanyId()