// src/mock/asyncMock.js

const productos = [
  // Categoría: Frutos Secos
  { id: 1, name: "Almendras Tostadas", price: 5000, category: "frutos-secos", img: "https://via.placeholder.com/150", stock: 10, description: "Almendras tostadas sin sal premium." },
  { id: 2, name: "Nueces Mariposa", price: 4500, category: "frutos-secos", img: "https://via.placeholder.com/150", stock: 15, description: "Nueces peladas mariposa extra blancas." },
  { id: 3, name: "Castañas de Cajú", price: 6000, category: "frutos-secos", img: "https://via.placeholder.com/150", stock: 5, description: "Castañas tostadas y suavemente saladas." },
  { id: 4, name: "Pistachos con Cáscara", price: 7500, category: "frutos-secos", img: "https://via.placeholder.com/150", stock: 8, description: "Pistachos tostados de origen natural." },
  { id: 5, name: "Avellanas Peladas", price: 5500, category: "frutos-secos", img: "https://via.placeholder.com/150", stock: 12, description: "Avellanas europeas crudas y peladas." },
  { id: 6, name: "Maní Tostado", price: 2000, category: "frutos-secos", img: "https://via.placeholder.com/150", stock: 25, description: "Maní tostado sin sal, ideal para snacks." },
  { id: 7, name: "Nueces Pecan", price: 6500, category: "frutos-secos", img: "https://via.placeholder.com/150", stock: 7, description: "Nueces pecanas enteras, sabor dulce." },
  { id: 8, name: "Macadamias", price: 9000, category: "frutos-secos", img: "https://via.placeholder.com/150", stock: 4, description: "Nuez de macadamia premium." },

  // Categoría: Semillas
  { id: 9, name: "Semillas de Chía", price: 2000, category: "semillas", img: "https://via.placeholder.com/150", stock: 30, description: "Ideales para yogures, batidos y postres." },
  { id: 10, name: "Semillas de Girasol", price: 1800, category: "semillas", img: "https://via.placeholder.com/150", stock: 20, description: "Semillas de girasol peladas y crudas." },
  { id: 11, name: "Semillas de Calabaza", price: 2500, category: "semillas", img: "https://via.placeholder.com/150", stock: 18, description: "Semillas de zapallo peladas tostadas." },
  { id: 12, name: "Semillas de Lino", price: 1500, category: "semillas", img: "https://via.placeholder.com/150", stock: 22, description: "Lino marrón rico en Omega 3." },
  { id: 13, name: "Sésamo Blanco", price: 2200, category: "semillas", img: "https://via.placeholder.com/150", stock: 15, description: "Semillas de sésamo blanco pelado." },
  { id: 14, name: "Sésamo Negro", price: 2400, category: "semillas", img: "https://via.placeholder.com/150", stock: 10, description: "Sésamo negro integral, sabor intenso." },
  { id: 15, name: "Amapola", price: 3000, category: "semillas", img: "https://via.placeholder.com/150", stock: 8, description: "Semillas de amapola para repostería." },

  // Categoría: Mixes
  { id: 16, name: "Mix Energético", price: 3000, category: "mixes", img: "https://via.placeholder.com/150", stock: 20, description: "Mix de pasas, maní, almendras y nueces." },
  { id: 17, name: "Mix Tropical", price: 3500, category: "mixes", img: "https://via.placeholder.com/150", stock: 15, description: "Chips de banana, coco, papaya y almendras." },
  { id: 18, name: "Mix Cervecero", price: 2800, category: "mixes", img: "https://via.placeholder.com/150", stock: 25, description: "Maní salado, maíz tostado y castañas." },
  { id: 19, name: "Mix Frutos Rojos", price: 4000, category: "mixes", img: "https://via.placeholder.com/150", stock: 12, description: "Cranberries, almendras y nueces." },
  { id: 20, name: "Mix Premium Salado", price: 4500, category: "mixes", img: "https://via.placeholder.com/150", stock: 10, description: "Pistachos, castañas, almendras y maní." }
];

// Simulamos el retraso de una API real con una Promesa y setTimeout
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000); // 2 segundos de espera
  });
};