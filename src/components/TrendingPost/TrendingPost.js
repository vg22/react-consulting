import { Link } from 'react-router-dom';
import imageOne from '../../assets/images/news/t1.jpg';
import imageTwo from '../../assets/images/news/t2.jpg';
import imageThree from '../../assets/images/news/t3.jpg';
import imageFour from '../../assets/images/news/t4.jpg';

const trendingPosts = [
    {
        id: 1,
        name: 'Lorem ipsum dolor sit cing elit, sed do.',
        link: '#',
        image: imageOne,
        date: '24 March, 2020'
    },
    {
        id: 2,
        name: 'Lorem ipsum dolor sit cing elit, sed do.',
        link: '#',
        image: imageTwo,
        date: '24 March, 2020'
    },
    {
        id: 3,
        name: 'Lorem ipsum dolor sit cing elit, sed do.',
        link: '#',
        image: imageThree,
        date: '24 March, 2020'
    },
    {
        id: 4,
        name: 'Lorem ipsum dolor sit cing elit, sed do.',
        link: '#',
        image: imageFour,
        date: '24 March, 2020'
    }
];

const TrendingPost = () => {
    return (
        <aside className="widget widget-trend-post">
            <h3 className="widget-title"><span>Trend News</span></h3>

            {
                trendingPosts?.map(post => {
                    return (
                        <div key={post?.id} className="tr-post">
                            <Link to={post?.link}>
                                <img src={post?.image} alt="" />
                            </Link>
                            <h5><Link to={post?.link}>{post?.name}</Link>
                            </h5>
                            <span><i className="fa fa-calendar-alt"></i>24 March, 2020</span>
                        </div>
                    )
                })
            }
        </aside>
    );
};

export default TrendingPost;