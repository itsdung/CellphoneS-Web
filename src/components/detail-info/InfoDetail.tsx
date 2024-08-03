'use client'
import React from 'react'
import './style.scss';
import { StaticImageData } from 'next/image';
import { GoChevronDown } from 'react-icons/go';

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

interface IphoneData {
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

const InfoDetail = ({ item }: { item: IphoneData }) => {
  const {
    info: {
      rearCamera,
      graphics,
      connection,
      storage,
      charge,
      screen,
      frontCamera,
      design,
    },
  } = item;

  const rearInfo = rearCamera?.info?.join(', ') || 'N/A';
  const chipset = graphics?.chipset || 'N/A';
  const nfc = connection?.nfc?.join(', ') || 'N/A';
  const ram = storage?.ram || 'N/A';
  const memory = storage?.memory || 'N/A';
  const battery = charge?.battery || 'N/A';
  const sim = connection?.sim?.join(', ') || 'N/A';
  const os = connection?.os?.join(', ') || 'N/A';
  const screenResolution = screen?.resolution?.join(', ') || 'N/A';
  const screenFeatures = screen?.features?.join(', ') || 'N/A';
  const screenSize = screen?.size ? `${screen.size} inches` : 'N/A';
  const screenTech = screen?.technology?.join(', ') || 'N/A';
  const weight = design?.weight ? `${design.weight} g` : 'N/A';

  const frontCameraInfo = frontCamera?.info?.join(', ') || 'N/A';

  return (
    <div className='info-detail'>
      <p className='info-detail-title'>Thông số kỹ thuật</p>
      <ul className="detail-list">
        <li className='detail-list-item detail-screen-size'>
          <p>Kích thước màn hình</p>
          <span>{screenSize}</span>
        </li>
        <li className='detail-list-item detail-screen-tech'>
          <p>Công nghệ màn hình</p>
          <span>{screenTech}</span>
        </li>
        <li className="detail-list-item detail-rear-camera">
          <p>Camera sau</p>
          <span>{rearInfo}</span>
        </li>
        <li className="detail-list-item detail-front-camera">
          <p>Camera trước</p>
          <span>{frontCameraInfo}</span>
        </li>
        <li className="detail-list-item detail-chipset">
          <p>Chipset</p>
          <span>{chipset}</span>
        </li>
        <li className="detail-list-item detail-nfc">
          <p>Công nghệ NFC</p>
          <span>{nfc}</span>
        </li>
        <li className="detail-list-item detail-ram">
          <p>RAM</p>
          <span>{ram} GB</span>
        </li>
        <li className='detail-list-item detail-memory'>
          <p>Bộ nhớ trong</p>
          <span>{memory} GB</span>
        </li>
        <li className="detail-list-item detail-charge">
          <p>Pin</p>
          <span>{battery} mAh</span>
        </li>
        <li className="detail-list-item detail-sim">
          <p>Thẻ sim</p>
          <span>{sim}</span>
        </li>
        <li className='detail-list-item detail-os'>
          <p>Hệ điều hành</p>
          <span>{os}</span>
        </li>
        <li className='detail-list-item detail-screen-resolution'>
          <p>Độ phân giải màn hình</p>
          <span>{screenResolution}</span>
        </li>
        <li className='detail-list-item detail-screen-features'>
          <p>Tính năng màn hình</p>
          <span>{screenFeatures}</span>
        </li>
        <li className='detail-list-item detail-weight'>
          <p>Trọng lượng</p>
          <span>{weight}</span>
        </li>
      </ul>
      <button className='full-detail-btn'>Xem cấu hình chi tiết <GoChevronDown /></button>
    </div>
  );
}

export default InfoDetail;