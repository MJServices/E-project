document.addEventListener("DOMContentLoaded", () => {
  const comparisonData = {
    "washer-dryer": {
      product1: {
        name: "Washer 3000",
        image: "https://imgs.search.brave.com/RV40zt6YVNogxh8zHHKp8htf7ndFCn87h3YlrdNPQtE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vR3Jl/ZW53b3Jrcy0zMDAw/LVBTSS0yLTAtTWF4/LUdQTS1UcnVCcnVz/aGxlc3MtRWxlY3Ry/aWMtUHJlc3N1cmUt/V2FzaGVyLU1vdG9y/LTEyMFZfMzU2MjVi/NzMtNDIxMi00MzJi/LWIxNDYtMjNkNjQ4/NmVlMTExLjc1NTY0/YTNhZjFlOWM5Zjdm/OGUxMDEwZjYxOGRk/MjZiLmpwZWc_b2Ru/SGVpZ2h0PTU4MCZv/ZG5XaWR0aD01ODAm/b2RuQmc9RkZGRkZG",
        price: "$499",
        features: "High-speed spin, Energy Star certified, 15 wash cycles",
        efficiency: "A++",
        warranty: "2 years",
        description: "The Washer 3000 is designed for efficiency and performance, featuring a high-speed spin cycle and multiple wash settings for all fabric types.",
      },
      product2: {
        name: "Dryer 5000",
        image: "https://imgs.search.brave.com/4OhGPioIyKDdXnjbcxn4Pyr8MZVzJ_aIx1SKryOvwVA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGhpbGlwcy5j/b20vaXMvaW1hZ2Uv/cGhpbGlwc2NvbnN1/bWVyLzQ1MjdhM2Ri/ZjgxZjRkM2FhNTVm/YWU3NzAxM2IwYzUx/P3dpZD0zMDkmaGVp/PTMwOSYkcG5nbGFy/Z2Uk.jpeg",
        price: "$399",
        features: "Quick dry, Anti-wrinkle technology, Sensor drying",
        efficiency: "A+",
        warranty: "1 year",
        description: "The Dryer 5000 offers quick drying with advanced anti-wrinkle technology and sensor drying for optimal results.",
      },
    },
    "fridge-microwave": {
      product1: {
        name: "Smart Fridge X",
        image: "https://imgs.search.brave.com/stDCl_2as6DuQQXc5OrcZezV3JEFQWUfcVEPv7X8CMc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmlk/Z2UuY29tL2Nkbi9z/aG9wL2ZpbGVzL0Zy/ZW5jaC1Eb29yLVNt/YXJ0LVJlZnJpZ2Vy/YXRvci1GcmlkZ2Uu/Y29tLTQ0ODExMTcx/Mi5qcGc_dj0xNzI0/MTY0ODUzJndpZHRo/PTQwMA",
        price: "$999",
        features: "Wi-Fi enabled, Touchscreen display, Smart cooling",
        efficiency: "A++",
        warranty: "3 years",
        description: "The Smart Fridge X combines modern technology with efficient cooling, featuring a touchscreen display and smart cooling system.",
      },
      product2: {
        name: "Microwave Pro",
        image: "https://imgs.search.brave.com/knAgMD6xeqepwd-A_4zsvl5BSaVnQuawTZmoDe9o5Vg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pZmdz/dXBwbGllcy5jb20v/Y2RuLWNnaS9pbWFn/ZS93aWR0aD01MDAs/cXVhbGl0eT04NS9h/c3NldHMvaW1hZ2Vz/L3BhbmFzb25pYy1u/ZS0xMDI1Zi5qcGc",
        price: "$199",
        features: "Convection cooking, Child lock, Auto defrost",
        efficiency: "A",
        warranty: "2 years",
        description: "The Microwave Pro offers versatile cooking options with convection technology, child safety lock, and auto defrost functionality.",
      },
    },
    "ac-heater": {
      product1: {
        name: "CoolAir AC",
        image: "https://imgs.search.brave.com/19P9IwWPqvfkPD4P93tTe8GLKdYhoXKajLBTAuJYWpA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzIzLzc2LzE4/LzM2MF9GXzEyMjM3/NjE4MDhfU3BZc0xu/MWU3bGVVclVSbGxF/MnQwRmhjS241UGdT/amEuanBn",
        price: "$599",
        features: "Smart temperature control, Quiet mode, Remote control",
        efficiency: "A++",
        warranty: "2 years",
        description: "The CoolAir AC provides efficient cooling with smart temperature control and a quiet mode for a peaceful environment.",
      },
      product2: {
        name: "HeatMaster 2000",
        image: "https://imgs.search.brave.com/TndMjMPbP4R895YaavZPLWAAJ32obFi5jYoUTdTy23o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vdXRk/b29yYm9pbGVyLmNv/bS9jZG4vc2hvcC9j/b2xsZWN0aW9ucy9D/MjUwbWVudV8xX2Fi/MzkzNjg3LTdlNTct/NDY0My05OWM2LTRj/ZGQzNTA2NTI2My5w/bmc_dj0xNjI2NzI2/NDk0",
        price: "$299",
        features: "Portable, Energy-efficient heating, Adjustable thermostat",
        efficiency: "A+",
        warranty: "1 year",
        description: "The HeatMaster 2000 is a portable and energy-efficient heater with an adjustable thermostat for personalized comfort.",
      },
    },
    "dishwasher-oven": {
      product1: {
        name: "Dishwasher Supreme",
        image: "https://imgs.search.brave.com/t1Ql96TM4GiNoX0nl5MKvHCsF-LnO9jGCrtCPyBoQXQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU1/MzUxNTAzL3Bob3Rv/L2Rpc2h3YXNoZXIu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWVkM2xiZDZwWUNj/dDBJR1hHS2pfUlJ1/bGVnUkljR2RUXy1G/ZGdDMkV1Qnc9",
        price: "$699",
        features: "Auto-clean, Quiet operation, Energy Star certified",
        efficiency: "A++",
        warranty: "3 years",
        description: "The Dishwasher Supreme offers a quiet and efficient cleaning experience with auto-clean technology and energy certification.",
      },
      product2: {
        name: "Oven MasterChef",
        image: "https://imgs.search.brave.com/hoRoowynhI5lWEZzaQuqQEf4H3dpnWirRKo0ryPDtZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxdkpMQ1pCZW9M/Ll9BQ19VTDE2NV9T/UjE2NSwxNjVfLmpw/Zw",
        price: "$799",
        features: "Convection baking, Self-cleaning, Touch controls",
        efficiency: "A+",
        warranty: "2 years",
        description: "The Oven MasterChef is perfect for baking enthusiasts, featuring convection baking, self-cleaning, and intuitive touch controls.",
      },
    },
  };

  const updateComparison = () => {
    const selectedOption = document.getElementById("product-select").value;
    const data = comparisonData[selectedOption];

    if (data) {
      // Update Product 1
      document.getElementById("product1-name").textContent = data.product1.name;
      document.getElementById("product1-image").src = data.product1.image;
      document.getElementById("product1-price").textContent = data.product1.price;
      document.getElementById("product1-features").textContent = data.product1.features;
      document.getElementById("product1-efficiency").textContent = data.product1.efficiency;
      document.getElementById("product1-warranty").textContent = data.product1.warranty;

      // Update Product 2
      document.getElementById("product2-name").textContent = data.product2.name;
      document.getElementById("product2-image").src = data.product2.image;
      document.getElementById("product2-price").textContent = data.product2.price;
      document.getElementById("product2-features").textContent = data.product2.features;
      document.getElementById("product2-efficiency").textContent = data.product2.efficiency;
      document.getElementById("product2-warranty").textContent = data.product2.warranty;
    }
  };

  // Initialize with the first comparison
  updateComparison();

  // Attach the updateComparison function to the dropdown
  document.getElementById("product-select").addEventListener("change", updateComparison);
});