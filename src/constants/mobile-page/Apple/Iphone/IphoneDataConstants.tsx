
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


interface ImageDetails {
    main: StaticImageData;
    colorThumb: StaticImageData;
    details: StaticImageData[];
  }
  
  interface ProductInfo {
    features: string[];
    boxContents: string[];
    warranty: string[];
    vat: string[];
  }
  
  interface Screen {
    features?: string[];
    type?: string[];
    size?: number;
    technology?: string[];
    frequency?: number;
    resolution?: string[];
  }
  
  interface RearCamera {
    info?: string[];
    video?: string[];
    features?: string[];
  }
  
  interface FrontCamera {
    info?: string[];
    video?: string[];
  }
  
  interface Graphics {
    chipset?: string;
    cpuType?: string;
    gpu?: string;
  }
  
  interface Connection {
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
  
  interface Storage {
    ram?: number;
    memory?: number;
    memoryCardPort?: boolean;
  }
  
  interface Charge {
    battery?: number;
    tech?: string[];
    port?: string[];
  }
  
  interface Design {
    size?: string[];
    weight?: number;
    backMaterial?: string[];
    frameMaterial?: string[];
  }
  
  interface SideTech {
    waterproof?: string[];
    specs?: string[];
    additional?: string[];
    sound?: string[];
  }
  
  interface Handy {
    fingerprintSensor?: boolean;
    sensors?: string[];
    specialFeatures?: string[];
  }
  
  interface General {
    releaseDate?: string[];
  }
  
  interface Info {
    productInfo: ProductInfo;
    usage: string[];
    productType: string;
    chip: string;
    cameraFeatures: string[];
    manufacturer: string;
    currentStatus: string[];
    screen: Screen;
    rearCamera: RearCamera;
    frontCamera: FrontCamera;
    graphics: Graphics;
    connection: Connection;
    storage: Storage;
    charge: Charge;
    design: Design;
    sideTech: SideTech;
    handy: Handy;
    general: General;
  }
  
  export interface IphoneData {
    id: string;
    img: ImageDetails;
    name: string;
    newPrice: number;
    oldPrice: number;
    sale?: boolean;
    payWay?: number;
    discount?: number;
    description: string;
    rating?: number;
    loved?: boolean;
    suggest?: boolean;
    available?: boolean;
    info: Info;
}

export const iphoneData: IphoneData[] = [
    {
        id: uuidv4(),
        img: {
            main: img12,
            colorThumb: img12_blue,
            details: [img12_1, img12_2, img12_3, img12_4, img12_5, img12_6, img12_7, img12_8],
        },
        name: 'iPhone 15 Plus 256GB | Chính hãng VN/A',
        newPrice: 29490000,
        oldPrice: 34990000,
        sale: true,
        payWay: 0,
        discount: 9,
        description: 'Latest features with larger display, high quality.',
        rating: 5,
        loved: true,
        suggest: true,
        available: true,
        info: {
            productInfo: {
                features: ['Máy mới 100% , chính hãng Apple Việt Nam. CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam'],
                boxContents: ['Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C'],
                warranty: ['1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn'],
                vat: ['Giá sản phẩm đã bao gồm VAT'],
            },
            usage: ['Dung lượng lớn', 'Cấu hình cao', 'Pin trâu'],
            productType: 'Iphone(IOS)',
            chip: 'Apple A',
            cameraFeatures: ['Chụp xoá phông', 'Chụp góc rộng', 'Quay video 4K'],
            manufacturer: 'Apple',
            currentStatus: ['New'],
            screen: {
                features: ['Tốc độ làm mới 120Hz', '460 ppi', '2000 nits', 'HDR', 'True Tone', 'Dải màu rộng (P3)', 'Haptic Touch', 'Tỷ lệ tương phản 2.000.000:1'],
                type: ['Dynamic Island'],
                size: 6.7,
                technology: ['Super Retina XDR OLED'],
                frequency: 120,
                resolution: ['2796 x 1290-pixel'],
            },
            rearCamera: {
                info: ['Camera chính: 48MP, 24 mm, ƒ/1.78', 'Camera góc siêu rộng: 12 MP, 13 mm, ƒ/2.2', 'Camera Tele: 12 MP'],
                video: ['4K@24/25/30/60 fps', 'HD 1080p@25/30/60 fps', 'HD 720p@30 fps'],
                features: ['Flash True Tone Thích Ứng', 'Photonic Engine', 'Deep Fusion', 'HDR thông minh thế hệ 5', 'Ảnh chân dung thế hệ mới với Focus và Depth Control', 'Hiệu ứng Chiếu Sáng Chân Dung với sáu chế độ', 'Chế độ Ban Đêm'],
            },
            frontCamera: {
                info: ['12MP, ƒ/1.9'],
                video: ['4K@24/25/30/60 fps', 'HD 1080p@25/30/60 fps'],
            },
            graphics: {
                chipset: 'Apple A17 Pro 6 nhân',
                cpuType: 'CPU 6 lõi mới với 2 lõi hiệu năng và 4 lõi hiệu suất',
                gpu: 'GPU 6 nhân mới',
            },
            connection: {
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
            storage: {
                ram: 8,
                memory: 256,
                memoryCardPort: false,
            },
            charge: {
                battery: 4422,
                tech: ['Sạc nhanh 20 W', 'Sạc không dây 15W', 'Sạc không dây Qi 7.5W'],
                port: ['USB Type-C'],
            },
            design: {
                size: ['159,9 x 76,7 x 8,25 mm'],
                weight: 221,
                backMaterial: ['Kính'],
                frameMaterial: ['Titanium'],
            },
            sideTech: {
                waterproof: ['Đạt mức IP68 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút)'],
                specs: ['Camera TrueDepth hỗ trợ nhận diện khuôn mặt'],
                additional: ['SOS Khẩn Cấp', 'Phát Hiện Va Chạm'],
                sound: ['AAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus và Dolby Atmos'],
            },
            handy: {
                fingerprintSensor: false,
                sensors: ['Cảm biến gia tốc, Cảm biến tiệm cận, Cảm biến ánh sáng, La bàn, Con quay hồi chuyển, Cảm biến áp kế, Cảm biến trọng lực'],
                specialFeatures: ['Hỗ trợ 5G', 'Sạc không dây', 'Nhận diện khuôn mặt', 'Kháng nước, kháng bụi'],
            },
            general: {
                releaseDate: ['09/2023'],
            },
        },
    },
];