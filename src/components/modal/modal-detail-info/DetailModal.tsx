'use client'
import React from 'react'
import './style.scss';
import { StaticImageData } from 'next/image';
import { IoClose } from 'react-icons/io5';

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

interface Item {
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

const DetailModal = ({ item }: { item: Item }) => {
  const screenResolution = item.subScreen?.[0]?.screenResolution?.join(', ') || 'N/A';
  const screenFeatures = item.subScreen?.[0]?.screenFeatures?.join(', ') || 'N/A';
  const screenSize = item.subScreen?.[0]?.screenSize || 'N/A';
  const screenTech = item.subScreen?.[0]?.screenTech?.join(', ') || 'N/A';
  const screenType = item.subScreen?.[0]?.screenType?.join(', ') || 'N/A';
  const screenFrequency = item.subScreen?.[0]?.screenFrequency || 'N/A';
    
  const rearInfo = item.subRearCamera?.[0]?.rearInfo?.join(', ') || 'N/A';
  const rearVideo = item.subRearCamera?.[0]?.rearVideo?.join(', ') || 'N/A';
  const rearFeatures = item.subRearCamera?.[0]?.rearFeatures?.join(', ') || 'N/A';

  const frontCameraInfo = item.subFrontCamera?.[0]?.frontInfo?.join(', ') || 'N/A';
  const frontVideo = item.subFrontCamera?.[0]?.frontVideo?.join(', ') || 'N/A';

  const chipset = item.subGraphic?.[0]?.chipset || 'N/A';
  const cpuType = item.subGraphic?.[0]?.cpuType || 'N/A';
  const gpu = item.subGraphic?.[0]?.gpu || 'N/A';

  const nfc = item.subConection?.[0]?.nfc?.join(', ') || 'N/A';
  const sim = item.subConection?.[0]?.sim?.join(', ') || 'N/A';
  const os = item.subConection?.[0]?.os?.join(', ') || 'N/A';
  const headphones = item.subConection?.[0]?.headphones?.join(', ') || 'N/A';
  const infrared = item.subConection?.[0]?.infrared?.join(', ') || 'N/A';
  const wifi = item.subConection?.[0]?.wifi?.join(', ') || 'N/A';
  const bluetooth = item.subConection?.[0]?.bluetooth?.join(', ') || 'N/A';
  const network = item.subConection?.[0]?.network?.join(', ') || 'N/A';
  const gps = item.subConection?.[0]?.gps?.join(', ') || 'N/A';

  const ram = item.subStore?.[0]?.ram || 'N/A';
  const memory = item.subStore?.[0]?.memory || 'N/A';
  const memoryCardPort = item.subStore?.[0]?.memoryCardPort? 'Có' : 'Không';

  const battery = item.subCharge?.[0]?.battery || 'N/A';
  const chargeTech = item.subCharge?.[0]?.chargeTech?.join(', ') || 'N/A';
  const chargePort = item.subCharge?.[0]?.chargePort?.join(', ') || 'N/A';

  const size = item.subDesign?.[0]?.size?.join(', ') || 'N/A';
  const weight = item.subDesign?.[0]?.weight || 'N/A';
  const backMaterial = item.subDesign?.[0]?.backMaterial?.join(', ') || 'N/A';
  const frameMaterial = item.subDesign?.[0]?.frameMaterial?.join(', ') || 'N/A';

  const waterproof = item.subSideTech?.[0]?.waterproof?.join(', ') || 'N/A';
  const specTech = item.subSideTech?.[0]?.specTech?.join(', ') || 'N/A';
  const anotherTech = item.subSideTech?.[0]?.anotherTech?.join(', ') || 'N/A';
  const soundTech = item.subSideTech?.[0]?.soundTech?.join(', ') || 'N/A';

  const fprintsensor = item.subHandy?.[0]?.fprintsensor? 'Có' : 'Không';
  const sensor = item.subHandy?.[0]?.sensor?.join(', ') || 'N/A';
  const specialFeatures = item.subHandy?.[0]?.specialFeatures?.join(', ') || 'N/A';

  const releaseDate = item.subGeneral?.[0]?.releaseDate?.join(', ') || 'N/A';
  
  return (
    <div className='info-detail'>
        <div className="detail-header">
            <p className='info-detail-title'>Thông số kỹ thuật</p>
        </div>
        <div className="detail-list">
            <div className="detail-screen detail-name ">
                <div className="detail-screen-title item-title">{item.screen}</div>
                <div className="detail-screen-list detail-item">
                    <div className='detail-screen-size detail-item-child'>
                        <p>Kích thước màn hình</p>
                        <span>{screenSize} inches</span>
                    </div>
                    <div className='detail-screen-tech detail-item-child'>
                        <p>Công nghệ màn hình</p>
                        <span>{screenTech}</span>
                    </div>
                    <div className='detail-screen-resolution detail-item-child'>
                        <p>Độ phân giải màn hình</p>
                        <span>{screenResolution}</span>
                    </div>
                    <div className='detail-screen-features detail-item-child'>
                        <p>Tính năng màn hình</p>
                        <span>{screenFeatures}</span>
                    </div>
                    <div className='detail-screen-frequency detail-item-child'>
                        <p>Tần số quét</p>
                        <span>{screenFrequency}</span>
                    </div>
                    <div className='detail-screen-type detail-item-child'>
                        <p>Kiểu màn hình</p>
                        <span>{screenType}</span>
                    </div>
                </div>
            </div>
            
            <div className="detail-rear-camera detail-name">
                <div className="detail-rear-camera-title item-title">{item.rearCamera}</div>
                    <div className="detail-rear-list detail-item">
                        <div className="rear-info detail-item-child">
                            <p>Camera sau</p>
                            <span>{rearInfo}</span>
                        </div>
                        <div className="rear-video detail-item-child">
                            <p>Quay video</p>
                            <span>{rearVideo}</span>
                        </div>
                        <div className="rear-features detail-item-child">
                            <p>Tính năng camera</p>
                            <span>{rearFeatures}</span>
                        </div>
                    </div>
            </div>

            <div className="detail-front-camera detail-name">
                <div className="detail-front-camera-title item-title">{item.frontCamera}</div>
                <div className="detail-front-camera-list detail-item">
                    <div className="front-camera-info detail-item-child">
                        <p>Camera trước</p>
                        <span>{frontCameraInfo}</span>
                    </div>
                    <div className="front-camera-video detail-item-child">
                        <p>Quay video</p>
                        <span>{frontVideo}</span>
                    </div>
                </div>
            </div>

            <div className="detail-graphic detail-name">
                <div className="detail-graphic-title item-title">{item.graphic}</div>
                <div className="detail-graphic-list detail-item">
                    <div className='detail-chipset detail-item-child'>
                        <p>Chipset</p>
                        <span>{chipset}</span>
                    </div>
                    <div className='detail-cpu-type detail-item-child'>
                        <p>CPU</p>
                        <span>{cpuType}</span>
                    </div>
                    <div className='detail-gpu detail-item-child'>
                        <p>GPU</p>
                        <span>{gpu}</span>
                    </div>
                </div>
            </div>

            <div className="detail-connection detail-name">
                <div className="detail-connection-title item-title">{item.conection}</div>
                <div className="detail-connection-list detail-item">
                    <div className='detail-nfc detail-item-child'>
                        <p>NFC</p>
                        <span>{nfc}</span>
                    </div>
                    <div className='detail-sim detail-item-child'>
                        <p>Thẻ SIM</p>
                        <span>{sim}</span>
                    </div>
                    <div className='detail-os detail-item-child'>
                        <p>Hệ điều hành</p>
                        <span>{os}</span>
                    </div>
                    <div className='detail-infrared detail-item-child'>
                        <p>Hồng ngoại</p>
                        <span>{infrared}</span>
                    </div>
                    <div className='detail-headphones detail-item-child'>
                        <p>Jack tai nghe 3.5</p>
                        <span>{headphones}</span>
                    </div>
                    <div className='detail-network detail-item-child'>
                        <p>Hỗ trợ mạng</p>
                        <span>{network}</span>
                    </div>
                    <div className='detail-wifi detail-item-child'>
                        <p>Wifi</p>
                        <span>{wifi}</span>
                    </div>
                    <div className='detail-bluetooth detail-item-child'>
                        <p>Bluetooth</p>
                        <span>{bluetooth}</span>
                    </div>
                    <div className='detail-gps detail-item-child'>
                        <p>GPS</p>
                        <span>{gps}</span>
                    </div>
                </div>
            </div>

            <div className="detail-store detail-name">
                <div className="detail-store-title item-title">{item.store}</div>
                <div className="detail-store-list detail-item">
                    <div className="detail-ram detail-item-child">
                        <p>RAM</p>
                        <span>{ram} GB</span>
                    </div>
                    <div className="detail-memory detail-item-child">
                        <p>Bộ nhớ trong</p>
                        <span>{memory} GB</span>
                    </div>
                    <div className="detail-memory-card-port detail-item-child">
                        <p>Khe cắm thẻ nhớ</p>
                        <span>{memoryCardPort}</span>
                    </div>
                </div>
            </div>

            <div className='detail-charge detail-name'>
                <div className="detail-charge-title item-title">{item.charge}</div>
                <div className="detail-charge-list detail-item">
                    <div className='detail-battery detail-item-child'>
                        <p>Pin</p>
                        <span>{battery}</span>
                    </div>
                    <div className='detail-charge-type detail-item-child'>
                        <p>Công nghệ sạc</p>
                        <span>{chargeTech}</span>
                    </div>
                    <div className='detail-charge-port detail-item-child'>
                        <p>Cổng sạc</p>
                        <span>{chargePort}</span>
                    </div>
                </div>
            </div>

            <div className="detail-design detail-name">
                <div className="detail-design-title item-title">{item.design}</div>
                <div className="detail-design-list detail-item">
                    <div className='detail-size detail-item-child'>
                        <p>Kích thước</p>
                        <span>{size}</span>
                    </div>
                    <div className='detail-weight detail-item-child'>
                        <p>Trọng lượng</p>
                        <span>{weight}</span>
                    </div>
                    <div className='detail-back-material detail-item-child'>
                        <p>Chất liệu mặt lưng</p>
                        <span>{backMaterial}</span>
                    </div>
                    <div className='detail-frame-material detail-item-child'>
                        <p>Chất liệu khung viền</p>
                        <span>{frameMaterial}</span>
                    </div>
                </div>
            </div>

            <div className="detail-sidetech detail-name">
                <div className="detail-sidetech-title item-title">{item.sideTech}</div>
                <div className="detail-sidetech-list detail-item">
                    <div className='detail-waterproof detail-item-child'>
                        <p>Chỉ số kháng nước, bụi</p>
                        <span>{waterproof}</span>
                    </div>
                    <div className='detail-spectech detail-item-child'>
                        <p>Công nghệ - Tiện ích</p>
                        <span>{specTech}</span>
                    </div>
                    <div className='detail-another-tech detail-item-child'>
                        <p>Tiện ích khác</p>
                        <span>{anotherTech}</span>
                    </div>
                    <div className='detail-sound-tech detail-item-child'>
                        <p>Công nghệ âm thanh</p>
                        <span>{soundTech}</span>
                    </div>
                </div>
            </div>

            <div className='detail-handy detail-name'>
                <div className="detail-handy-title item-title">{item.handy}</div>
                <div className="detail-handy-list detail-item">
                    <div className='detail-fprint detail-item-child'>
                        <p>Cảm biến vân tay</p>
                        <span>{fprintsensor}</span>
                    </div>
                    <div className='detail-sensor detail-item-child'>
                        <p>Các loại cảm biến</p>
                        <span>{sensor}</span>
                    </div>
                    <div className='detail-special-feature detail-item-child'>
                        <p>Tính năng đặc biệt</p>
                        <span>{specialFeatures}</span>
                    </div>
                </div>
            </div>

            <div className='detail-general detail-name'>
                <div className="detail-general-title item-title">{item.general}</div>
                <div className="detail-general-list detail-item">
                    <p className='detail-release-date detail-item-child'>Thời điểm ra mắt</p>
                    <span>{releaseDate}</span>
                </div>
            </div>
      </div>
      <button className='close-detail-btn'><IoClose /> Đóng </button>
    </div>
  );
  }
  
  export default DetailModal;
