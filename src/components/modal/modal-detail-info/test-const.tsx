
const iphone13Data = [
    {
        name: 'Màn hình',
        slug: 'man-hinh',
        children: [
            {
                name: 'Tính năng màn hình',
                slug: 'tinh-nang-man-hinh',
                isDisplayed: true,
                value: ['Tốc độ làm mới 60Hz', '326 ppi', '800 nits', 'HDR', 'True Tone'],
            },
            {
                name: 'Tần số quét',
                slug: 'tan-so-quet',
                isDisplayed: true,
                value: 60,
            },
            {
                name: 'Độ phân giải màn hình',
                slug: 'do-phan-giai-man-hinh',
                isDisplayed: true,
                value: ['2532 x 1170-pixel'],
            }
        ],
    },
    
    {
        name: 'Camera sau',
        slug:'camera-sau',
        children: [
            {
                name:'Quay video',
                slug:'quay-video',
                isDisplayed: true,
                value: ['4K@24/25/30/60 fps', 'HD 1080p@25/30/60 fps', 'HD 720p@30 fps'],
            },

            {
                name:'Tính năng camera sau',
                slug:'tinh-nang-camera-sau',
                isDisplayed: true,
                value: ['Flash True Tone Thích Ứng', 'Photonic Engine', 'Deep Fusion', 'HDR thông minh thế hệ 5', 'Ảnh chân dung thế hệ mới với Focus và Depth Control', 'Hiệu ứng Chiếu Sáng Chân Dung với sáu chế độ', 'Chế độ Ban Đêm'],
            },
        ]
    }
];

// Dữ liệu cho iPhone 14
const iphone14BaseData = [
    {
        name: 'Màn hình',
        slug: 'man-hinh',
        children: [
            {
                name: 'Tính năng màn hình',
                slug: 'tinh-nang-man-hinh',
                isDisplayed: true,
                value: ['Tốc độ làm mới 120Hz', '460 ppi', '1500 nits', 'HDR', 'True Tone', 'Dải màu rộng (P3)'],
            },
            {
                name: 'Tần số quét',
                slug: 'tan-so-quet',
                isDisplayed: true,
                value: 120,
            },
            {
                name: 'Độ phân giải màn hình',
                slug: 'do-phan-giai-man-hinh',
                isDisplayed: true,
                value: ['2778 x 1284-pixel'],
            }
        ],
    },
    
    {
        name: 'Camera sau',
        slug:'camera-sau',
        children: [
            {
                name:'Quay video',
                slug:'quay-video',
                isDisplayed: true,
                value: ['4K@24/25/30/60 fps', 'HD 1080p@25/30/60 fps', 'HD 720p@30 fps'],
            },

            {
                name:'Tính năng camera sau',
                slug:'tinh-nang-camera-sau',
                isDisplayed: true,
                value: ['Flash True Tone Thích Ứng', 'Photonic Engine', 'Deep Fusion', 'HDR thông minh thế hệ 5', 'Ảnh chân dung thế hệ mới với Focus và Depth Control', 'Hiệu ứng Chiếu Sáng Chân Dung với sáu chế độ', 'Chế độ Ban Đêm'],
            },
        ]
    }
];

// Dữ liệu cho các loại lưu trữ của iPhone 14
const iphone14StorageVariants = [
    {
        name: 'Lưu trữ 256GB',
        slug: 'luu-tru-256gb',
        price: 6969696969,
        features: [
            {
                name: 'RAM',
                slug: 'ram',
                isDisplayed: true,
                value: 8,
            },
            {
                name: 'Bộ nhớ trong',
                slug: 'bo-nho-trong',
                isDisplayed: true,
                value: 256,
            },
        ],
    },
    {
        name: 'Lưu trữ 512GB',
        slug: 'luu-tru-512gb',
        price: 9999999999,
        features: [
            {
                name: 'RAM',
                slug: 'ram',
                isDisplayed: true,
                value: 8,
            },
            {
                name: 'Bộ nhớ trong',
                slug: 'bo-nho-trong',
                isDisplayed: true,
                value: 512,
            },
        ],
    }
];


const iphone14Data = [
    ...iphone14BaseData,
    ...iphone14StorageVariants
];


const iphone15Data = [
    {
        name: 'Màn hình',
        slug: 'man-hinh',
        children: [
            {
                name: 'Tính năng màn hình',
                slug: 'tinh-nang-man-hinh',
                isDisplayed: true,
                value: ['Tốc độ làm mới 120Hz', '460 ppi', '2000 nits', 'HDR', 'True Tone', 'Dải màu rộng (P3)', 'Haptic Touch', 'Tỷ lệ tương phản 2.000.000:1'],
            },
            {
                name: 'Tần số quét',
                slug: 'tan-so-quet',
                isDisplayed: true,
                value: 120,
            },
            {
                name: 'Độ phân giải màn hình',
                slug: 'do-phan-giai-man-hinh',
                isDisplayed: true,
                value: ['2796 x 1290-pixel'],
            }
        ],
    },
    
    {
        name: 'Camera sau',
        slug:'camera-sau',
        children: [
            {
                name:'Quay video',
                slug:'quay-video',
                isDisplayed: true,
                value: ['4K@24/25/30/60 fps', 'HD 1080p@25/30/60 fps', 'HD 720p@30 fps'],
            },

            {
                name:'Tính năng camera sau',
                slug:'tinh-nang-camera-sau',
                isDisplayed: true,
                value: ['Flash True Tone Thích Ứng', 'Photonic Engine', 'Deep Fusion', 'HDR thông minh thế hệ 5', 'Ảnh chân dung thế hệ mới với Focus và Depth Control', 'Hiệu ứng Chiếu Sáng Chân Dung với sáu chế độ', 'Chế độ Ban Đêm'],
            },
        ]
    }
];


const phoneProduct = [
    { version: 'iPhone 13', data: iphone13Data },
    { version: 'iPhone 14', data: iphone14Data },
    { version: 'iPhone 15', data: iphone15Data }
];


interface Product {
    id: string;
    name: string;
    storage: string;
    price: number;
}
  
  interface IphoneSeries {
    seriesName: string;
    products: Product[];
}

const iphoneSeries: IphoneSeries[] = [
    {
      seriesName: 'iPhone 13',
      products: [
        { id: '13-1', name: 'iPhone 13', storage: '128GB', price: 799 },
        { id: '13-2', name: 'iPhone 13', storage: '256GB', price: 899 },
        // Thêm các sản phẩm khác của iPhone 13 nếu cần
      ],
    },
    {
      seriesName: 'iPhone 14',
      products: [
        { id: '14-1', name: 'iPhone 14', storage: '128GB', price: 899 },
        { id: '14-2', name: 'iPhone 14', storage: '256GB', price: 999 },
        // Thêm các sản phẩm khác của iPhone 14 nếu cần
      ],
    },
    {
      seriesName: 'iPhone 15',
      products: [
        { id: '15-1', name: 'iPhone 15', storage: '128GB', price: 999 },
        { id: '15-2', name: 'iPhone 15', storage: '256GB', price: 1099 },
        // Thêm các sản phẩm khác của iPhone 15 nếu cần
      ],
    },
  ];