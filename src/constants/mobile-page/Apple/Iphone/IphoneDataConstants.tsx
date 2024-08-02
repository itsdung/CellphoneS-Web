
import img12 from '@/assets/images/mobile-data/iphone-15-plus_1-128gb.png';
import img12_blue from '@/assets/images/mobile-data/detail/iphone15-promax/iphone15-pro-max-titan-xanh.png'
import img12_1 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__1.png'
import img12_2 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__2.png'
import img12_3 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__3.png'
import img12_4 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__4.png'
import img12_5 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__5.png'
import img12_6 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__5.png'
import img12_7 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__6.png'
import img12_8 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__8.png'
import { StaticImageData } from "next/image";
import { v4 as uuidv4 } from 'uuid';

import React from 'react';
import type { SVGProps } from 'react';


interface SubImage {
    colorThumb: StaticImageData;
    detail: StaticImageData[];
}

interface SubInfo {
    productfeatures: string[];
    boxfeatures: string[];
    warranty: string[];
    vat: string[];
}

interface SubScreen {
    screenFeatures?: string[];
    screenType?: string[];
    screenSize?: number;
    screenTech?: string[];
    screenFrequency?: number;
    screenResolution?: string[];
}

interface SubRearCamera {
    rearInfo?: string[];
    rearVideo?: string[];
    rearFeatures?: string[];
}

interface SubFrontCamera {
    frontInfo?: string[];
    frontVideo?: string[];
    frontFeatures?: string[];
}

interface SubGraphic {
    chipset?: string;
    cpuType?: string;
    gpu?: string;
}

interface SubConection {
    nfc?: string[];
    sim?: string[];
    os?: string[];
    headphones?: string[];
    infrared?: string[];
    wifi?: string[];
    bluetooth?: string[];
    network?: string[];
    gps?: string[];
}

interface SubStore {
    ram?: number;
    memory?: number;
    memoryCardPort?: boolean;
}

interface SubCharge {
    battery?: number;
    chargeTech?: string[];
    chargePort?: string[];
}

interface SubDesign {
    size?: string[];
    weight?: number;
    backMaterial?: string[];
    frameMaterial?: string[];
}

interface SubSideTech {
    waterproof?: string[];
    specTech?: string[];
    anotherTech?: string[];
    soundTech?: string[];
}

interface SubHandy {
    fprintsensor?: boolean;
    sensor?: string[];
    specialFeatures?: string[];
}

interface SubGeneral {
    releaseDate?: string[];
}

interface iphoneData {
    id: string;
    img: StaticImageData;
    subImage?: SubImage[];

    name: string;
    newpri: number;
    oldpri: number;
    sale?: boolean;
    payway?: number;
    discount?: number;
    desc: string;
    rating?: number;
    loved?: boolean;
    suggest?: boolean;
    available?: boolean;

    productinfo?: string;
    subInfo?: SubInfo[];

    use?: string[];
    productType?: string;
    chip?: string;
    cameraFeatures?: string[];
    manufacturer?: string;
    currentStatus?: string[];

    screen?: string;
    subScreen?: SubScreen[];

    rearCamera?: string;
    subRearCamera?: SubRearCamera[];

    frontCamera?: string;
    subFrontCamera?: SubFrontCamera[];
    
    graphic?: string;
    subGraphic?: SubGraphic[];

    conection?: string;
    subConection?: SubConection[];

    store?: string;
    subStore?: SubStore[];

    charge?: string;
    subCharge?: SubCharge[];

    design?: string;
    subDesign?: SubDesign[];

    sideTech?: string;
    subSideTech?: SubSideTech[];

    handy?: string;
    subHandy?: SubHandy[];

    general?: string;
    subGeneral?: SubGeneral[];
}

export const iphoneData: iphoneData[] = [
    {
        id: uuidv4(),
        img: img12,
        subImage: [
            {
                colorThumb: img12_blue,
                detail: [img12_1, img12_2, img12_3, img12_4, img12_5, img12_6, img12_7, img12_8],
            },
        ],
        name: 'iPhone 15 Plus 256GB | Chính hãng VN/A',
        newpri: 29490000,
        oldpri: 34990000,
        sale: true,
        payway: 0,
        discount: 9,
        desc: 'Latest features with larger display, high quality.',
        rating: 5,
        loved: true,
        suggest: true,
        available: true,

        productinfo: 'Thông tin sản phẩm',
        subInfo: [
            {
                productfeatures: ['Máy mới 100% , chính hãng Apple Việt Nam. CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam'],
                boxfeatures: ['Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C'],
                warranty: ['1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn'],
                vat: ['Giá sản phẩm đã bao gồm VAT'],
            },
        ],

        use: ['Dung lượng lớn', 'Cấu hình cao', 'Pin trâu'],
        productType: 'Iphone(IOS)',
        chip:'Apple A',
        cameraFeatures: ['Chụp xoá phông', 'Chụp góc rộng', 'Quay video 4K'],
        manufacturer: 'Apple',
        currentStatus: ['New'],

        screen: 'Màn hình',
        subScreen: [
            {
                screenFeatures: ['Tốc độ làm mới 120Hz','460 ppi', '2000 nits', 'HDR', 'True Tone', 'Dải màu rộng (P3)', 'Haptic Touch', 'Tỷ lệ tương phản 2.000.000:1'],
                screenType: ['Dynamic Island'],
                screenSize: 6.7,
                screenTech: ['Super Retina XDR OLED'],
                screenFrequency: 120,
                screenResolution: ['2796 x 1290-pixel'],
            },
        ],

        rearCamera: 'Camera sau',
        subRearCamera: [
            {
                rearInfo: ['Camera chính: 48MP, 24 mm, ƒ/1.78', 'Camera góc siêu rộng: 12 MP, 13 mm, ƒ/2.2', 'Camera Tele: 12 MP'],
                rearVideo: ['4K@24/25/30/60 fps', 'HD 1080p@25/30/60 fps', 'HD 720p@30 fps'],
                rearFeatures: ['Flash True Tone Thích Ứng', 'Photonic Engine', 'Deep Fusion', 'HDR thông minh thế hệ 5', 'Ảnh chân dung thế hệ mới với Focus và Depth Control', 'Hiệu ứng Chiếu Sáng Chân Dung với sáu chế độ', 'Chế độ Ban Đêm'],
            },
        ],

        frontCamera: 'Camera trước',
        subFrontCamera: [
            {
                frontInfo: ['12MP, ƒ/1.9'],
                frontVideo: ['4K@24/25/30/60 fps', 'HD 1080p@25/30/60 fps'],
            },
        ],

        graphic: 'Vi xử lý & đồ họa',
        subGraphic: [
            {
                chipset: 'Apple A17 Pro 6 nhân',
                cpuType: 'CPU 6 lõi mới với 2 lõi hiệu năng và 4 lõi hiệu suất',
                gpu: 'GPU 6 nhân mới',
            },
        ],

        conection: 'Giao tiếp & kết nối',
        subConection: [
            {
                nfc: ['Có'],
                sim: ['2 SIM (nano‑SIM và eSIM)'],
                os: ['iOS 17'],
                headphones: ['Không'],
                infrared: ['Có'],
                wifi: ['Wi-Fi 6E (802.11ax)'],
                bluetooth: ['v5.3'],
                network: ['5G'],
                gps: ['GPS tần số kép chính xác (GPS, GLONASS, Galileo, QZSS, BeiDou và NavIC)'],
            },
        ],

        store: 'RAM & lưu trữ',
        subStore: [
            {
                ram: 8,
                memory: 256,
                memoryCardPort: false,
            },
        ],

        charge: 'Pin & công nghệ sạc',
        subCharge: [
            {
                battery: 4422,
                chargeTech: ['Sạc nhanh 20 W', 'Sạc không dây 15W', 'Sạc không dây Qi 7.5W'],
                chargePort: ['USB Type-C'],
            },
        ],

        design: 'Thiết kế & Trọng lượng',
        subDesign: [
            {
                size: ['159,9 x 76,7 x 8,25 mm'],
                weight: 221,
                backMaterial: ['Kính'],
                frameMaterial: ['Titanium'],
            },
        ],

        sideTech: 'Thông số khác',
        subSideTech: [
            {
                waterproof: ['Đạt mức IP68 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút)'],
                specTech: ['Camera TrueDepth hỗ trợ nhận diện khuôn mặt'],
                anotherTech: ['SOS Khẩn Cấp', 'Phát Hiện Va Chạm'],
                soundTech: ['AAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus và Dolby Atmos'],
            },
        ],

        handy: 'Tiện ích khác',
        subHandy: [
            {
                fprintsensor: false,
                sensor: ['Cảm biến gia tốc, Cảm biến tiệm cận, Cảm biến ánh sáng, La bàn, Con quay hồi chuyển, Cảm biến áp kế, Cảm biến trọng lực'],
                specialFeatures: ['Hỗ trợ 5G', 'Sạc không dây', 'Nhận diện khuôn mặt', 'Kháng nước, kháng bụi'],
            },
        ],

        general: 'Thông tin chung',
        subGeneral: [
            {
                releaseDate: ['09/2023'],
            },
        ],
    },
];