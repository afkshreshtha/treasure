import Carousel from "../../../components/trendingCarousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import "./style.scss"
const Trending = () => {

    const { data, loading } = useFetch('/modules?language=hindi,english');

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
            </ContentWrapper>
            <Carousel data={data?.data.trending.albums} loading={loading} />
        </div>
    );
};

export default Trending;