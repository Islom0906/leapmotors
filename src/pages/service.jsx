import SEO from "@/SEO/SEO";
import {serviceSEO} from "@/SEO/SEOconfig";

const Service = () => {
    return (

        <>
            <SEO title={serviceSEO[lang].title} description={serviceSEO[lang].description} ogTitle={serviceSEO[lang].ogTitle} ogDescription={serviceSEO[lang].ogDescription} />
            <div>

            </div>
        </>
    );
};

export default Service;