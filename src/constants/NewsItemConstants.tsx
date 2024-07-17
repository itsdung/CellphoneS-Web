import img1 from '@/assets/images/news/Caviar-Samsung-Galaxy-Z-Fold-6-1.jpg';
import img2 from '@/assets/images/news/OnePlus-Watch-2R-ra-mat-1.jpg';
import img3 from '@/assets/images/news/Oppo-Reno-10-Pro-Plus-tinh-nang-5.jpeg';
import img4 from '@/assets/images/news/danh-gia-macbook-air-m1-16gb-cover.jpg';
import { StaticImageData } from 'next/image';

interface NewsItem {
    img: StaticImageData;
    link: string;
    post: string;
}

export const newsData: NewsItem[] = [
    {
        img: img1,
        link: 'https://example.com/caviar-samsung-galaxy-z-fold-6',
        post: 'Caviar Samsung Galaxy Z Fold 6 chính thức ra mắt với nhiều cải tiến đáng chú ý...'
    },
    {
        img: img2,
        link: 'https://example.com/oneplus-watch-2r',
        post: 'OnePlus Watch 2R ra mắt với thiết kế mới và nhiều tính năng vượt trội...'
    },
    {
        img: img3,
        link: 'https://example.com/oppo-reno-10-pro-plus',
        post: 'Oppo Reno 10 Pro Plus chính thức ra mắt với nhiều tính năng vượt trội...'
    },
    {
        img: img4,
        link: 'https://example.com/macbook-air-m1-16gb',
        post: 'Đánh giá MacBook Air M1 16GB: Sức mạnh đáng kinh ngạc trong một thiết kế nhỏ gọn...'
    }
];
