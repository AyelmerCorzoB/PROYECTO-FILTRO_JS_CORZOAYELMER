export const getCompany = async () => {
    let res = await fetch("https://api.spacexdata.com/v4/company");
    let data = await res.json();

    const name = data.name;
    const founder = data.founder;
    const founded = data.founded;
    const employees = data.employees;
    const vehicles = data.vehicles;
    const launch_sites = data.launch_sites;
    const test_sites = data.test_sites;
    const ceo = data.ceo;
    const cto = data.cto;
    const coo = data.coo;
    const cto_propulsion = data.cto_propulsion;
    const valuation = data.valuation;
    const summary = data.summary;

    const headquarters_address = data.headquarters.address;
    const headquarters_city = data.headquarters.city;
    const headquarters_state = data.headquarters.state;

    const website = data.links.website;
    const flickr = data.links.flickr;
    const twitter = data.links.twitter;
    const elon_twitter = data.links.elon_twitter;

    return {
        name,
        founder,
        founded,
        employees,
        vehicles,
        launch_sites,
        test_sites,
        ceo,
        cto,
        coo,
        cto_propulsion,
        valuation,
        summary,
        headquarters_address,
        headquarters_city,
        headquarters_state,
        website,
        flickr,
        twitter,
        elon_twitter
    };
};
