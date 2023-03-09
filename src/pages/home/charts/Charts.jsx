import Carousel from "../../../components/chartsCarousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";


const Charts = () => {

    const { data, loading } = useFetch('/modules?language=hindi,english');

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Popular Charts</span>
            </ContentWrapper>
            <Carousel data={data?.data.charts} loading={loading} />
        </div>
    );
};

export default Charts;