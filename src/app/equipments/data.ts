import airCompressor from './Energy-solution/air-compressor.png';
import dewateringPump from './Energy-solution/dewatewring-pump.jpeg';
import generator from './Energy-solution/generator.png';
import towerLight from './Energy-solution/tower-light.png';
import weldingMachine from './Energy-solution/welding-machine.jpeg';

import bus from './Logistics&Transportation/Bus.jpeg';
import coaster from './Logistics&Transportation/coaster.jpg';
import dieselTanker from './Logistics&Transportation/Diesel-tanker.png';
import flatbedTrailer from './Logistics&Transportation/flatbed-trailer.jpeg';
import foodVan from './Logistics&Transportation/food-van.png';
import hydraulicLowbed from './Logistics&Transportation/hydraulic-lowbed.jpeg';
import lowbed from './Logistics&Transportation/lowbed.jpeg';
import pickup from './Logistics&Transportation/pickup.jpeg';
import sweetWaterTanker from './Logistics&Transportation/sweet-water-tanker.jpeg';
import vacuumTanker from './Logistics&Transportation/vaccum-tanker.png';
import van from './Logistics&Transportation/van.jpeg';
import waterTanker from './Logistics&Transportation/water-tanker.jpeg';

import backhoeLoaders from './construction-equipments/Backhoe-Loaders.jpeg';
import excavators from './construction-equipments/Excavators.png';
import grader from './construction-equipments/Grader.jpeg';
import skidLoaders from './construction-equipments/Skid-loaders.jpeg';
import articulatedDumpTruck from './construction-equipments/articulated-dump-truck.png';
import dozer from './construction-equipments/dozer.jpeg';
import dumpTruck from './construction-equipments/dump-truck.png';
import miniExcavators from './construction-equipments/mini-Excavators.png';
import rollerCompacter from './construction-equipments/roller-compacter.png';
import wheelExcavators from './construction-equipments/wheel-Excavators.jpeg';
import wheelLoader from './construction-equipments/wheel-loader.png';

import roughTerrainCrane from './lifting-equipments/Rough-Terrian-Crane.png';
import articulatedManlift from './lifting-equipments/articulated-manlift.png';
import boomTruck from './lifting-equipments/boom-truck.jpeg';
import crawlerCrane from './lifting-equipments/crawler-crane.png';
import dieselScissorLift from './lifting-equipments/diesel-scissor-lift.png';
import electricForklift from './lifting-equipments/electric-forlift.png';
import electricScissorLift from './lifting-equipments/electric-scissor-lift.png';
import forkliftCrane from './lifting-equipments/forklift-crane.png';
import forklift from './lifting-equipments/forklift.jpeg';
import manBasketTruck from './lifting-equipments/man-basket-truck.png';
import mobileCrane from './lifting-equipments/mobile-crane.png';
import sideBoom from './lifting-equipments/side-boom.jpeg';
import telehandler from './lifting-equipments/telehandler.png';
import telescopicManlift from './lifting-equipments/telescopic-manlift.png';
import towerCrane from './lifting-equipments/tower-crane.png';

import auger from './special-attachments/auger.jpeg';
import breaker from './special-attachments/breaker.png';
import brush from './special-attachments/brush.jpeg';
import bucket from './special-attachments/bucket.jpeg';
import chainSling from './special-attachments/chain-sling.jpeg';
import manBasket from './special-attachments/man-basket.jpeg';
import spiderBeam from './special-attachments/spider-beam.jpeg';

export const categories = [
  {
    id: 'construction-equipments',
    title: 'Construction Equipments',
    description: 'Heavy machinery for all your earth moving and construction needs.',
    previewImage: articulatedDumpTruck,
    items: [
      { name: 'Backhoe Loaders', image: backhoeLoaders },
      { name: 'Excavators', image: excavators },
      { name: 'Grader', image: grader },
      { name: 'Skid Loaders', image: skidLoaders },
      { name: 'Articulated Dump Truck', image: articulatedDumpTruck },
      { name: 'Dozer', image: dozer },
      { name: 'Dump Truck', image: dumpTruck },
      { name: 'Mini Excavators', image: miniExcavators },
      { name: 'Roller Compacter', image: rollerCompacter },
      { name: 'Wheel Excavators', image: wheelExcavators },
      { name: 'Wheel Loader', image: wheelLoader },
    ],
  },
  {
    id: 'lifting-equipments',
    title: 'Lifting Equipments',
    description: 'Reliable and safe lifting solutions.',
    previewImage: mobileCrane,
    items: [
      { name: 'Rough Terrain Crane', image: roughTerrainCrane },
      { name: 'Articulated Manlift', image: articulatedManlift },
      { name: 'Boom Truck', image: boomTruck },
      { name: 'Crawler Crane', image: crawlerCrane },
      { name: 'Diesel Scissor Lift', image: dieselScissorLift },
      { name: 'Electric Forklift', image: electricForklift },
      { name: 'Electric Scissor Lift', image: electricScissorLift },
      { name: 'Forklift Crane', image: forkliftCrane },
      { name: 'Forklift', image: forklift },
      { name: 'Man Basket Truck', image: manBasketTruck },
      { name: 'Mobile Crane', image: mobileCrane },
      { name: 'Side Boom', image: sideBoom },
      { name: 'Telehandler', image: telehandler },
      { name: 'Telescopic Manlift', image: telescopicManlift },
      { name: 'Tower Crane', image: towerCrane },
    ],
  },
  {
    id: 'logistics-transportation',
    title: 'Logistics and Transportation',
    description: 'Efficient transport and logistics vehicles.',
    previewImage: bus,
    items: [
      { name: 'Bus', image: bus },
      { name: 'Coaster', image: coaster },
      { name: 'Diesel Tanker', image: dieselTanker },
      { name: 'Flatbed Trailer', image: flatbedTrailer },
      { name: 'Food Van', image: foodVan },
      { name: 'Hydraulic Lowbed', image: hydraulicLowbed },
      { name: 'Lowbed', image: lowbed },
      { name: 'Pickup', image: pickup },
      { name: 'Sweet Water Tanker', image: sweetWaterTanker },
      { name: 'Vacuum Tanker', image: vacuumTanker },
      { name: 'Van', image: van },
      { name: 'Water Tanker', image: waterTanker },
    ],
  },
  {
    id: 'energy-solutions',
    title: 'Energy Solutions',
    description: 'Power and energy solutions for uninterrupted operations.',
    previewImage: generator,
    items: [
      { name: 'Air Compressor', image: airCompressor },
      { name: 'Dewatering Pump', image: dewateringPump },
      { name: 'Generator', image: generator },
      { name: 'Tower Light', image: towerLight },
      { name: 'Welding Machine', image: weldingMachine },
    ],
  },
  {
    id: 'special-attachments',
    title: 'Special Attachments',
    description: 'Customized attachments for specialized tasks.',
    previewImage: spiderBeam,
    items: [
      { name: 'Auger', image: auger },
      { name: 'Breaker', image: breaker },
      { name: 'Brush', image: brush },
      { name: 'Bucket', image: bucket },
      { name: 'Chain Sling', image: chainSling },
      { name: 'Man Basket', image: manBasket },
      { name: 'Spider Beam', image: spiderBeam },
    ],
  },
];
