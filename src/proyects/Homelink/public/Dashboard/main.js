const devices = [
  {
    id: "light-1",
    title: "Living Room Light",
    type: "toggle",
    status: "active",
    room: "Living Room",
    lastUpdated: new Date(),
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>`
  },
  {
    id: "light-2",
    title: "Kitchen Light",
    type: "slider",
    status: "active",
    value: 70,
    room: "Kitchen",
    lastUpdated: new Date(),
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>`
  },
  {
    id: "thermostat-1",
    title: "Living Room Temp",
    type: "sensor",
    status: "active",
    value: 72,
    unit: "°F",
    room: "Living Room",
    lastUpdated: new Date(),
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>`
  },
  {
    id: "door-1",
    title: "Front Door",
    type: "toggle",
    status: "inactive",
    room: "Entrance",
    lastUpdated: new Date(),
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path><path d="M2 20h20"></path><path d="M14 12v.01"></path></svg>`
  },
  {
    id: "window-1",
    title: "Bedroom Window",
    type: "toggle",
    status: "inactive",
    room: "Bedroom",
    lastUpdated: new Date(),
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`
  },
  {
    id: "humidity-1",
    title: "Humidity",
    type: "sensor",
    status: "active",
    value: 45,
    unit: "%",
    room: "Living Room",
    lastUpdated: new Date(),
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`
  },
  {
    id: "motion-1",
    title: "Motion Sensor",
    type: "sensor",
    status: "inactive",
    value: 0,
    room: "Hallway",
    lastUpdated: new Date(),
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
  },
  {
    id: "tv-1",
    title: "Smart TV",
    type: "toggle",
    status: "active",
    room: "Living Room",
    lastUpdated: new Date(),
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>`
  }
];

// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const deviceGrid = document.getElementById('device-grid');
const addDeviceBtn = document.getElementById('add-device-btn');
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const modal = document.getElementById('add-device-modal');
const closeModal = document.getElementById('close-modal');
const addDeviceForm = document.getElementById('add-device-form');
const deviceTypeSelect = document.getElementById('device-type');
const valueContainer = document.getElementById('value-container');
const unitContainer = document.getElementById('unit-container');

// Check for saved theme preference or use device preference
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
let isDarkMode = savedTheme === 'dark' || (savedTheme === null && userPrefersDark);

// Apply theme
function applyTheme() {
  if (isDarkMode) {
    document.body.classList.add('dark');
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  } else {
    document.body.classList.remove('dark');
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
  }
}

// Toggle sidebar
function toggleSidebar() {
  sidebar.classList.toggle('closed');
}

// Format date
function formatTimeAgo(date) {
  const now = new Date();
  const diffInMinutes = Math.floor((now - date) / (1000 * 60));
  
  if (diffInMinutes < 1) {
    return 'just now';
  } else if (diffInMinutes === 1) {
    return '1 minute ago';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInMinutes < 120) {
    return '1 hour ago';
  } else {
    return `${Math.floor(diffInMinutes / 60)} hours ago`;
  }
}

// Render device cards
function renderDevices() {
  deviceGrid.innerHTML = '';
  
  devices.forEach(device => {
    const deviceCard = document.createElement('div');
    deviceCard.className = 'device-card';
    deviceCard.id = device.id;
    
    // Create header
    const deviceHeader = document.createElement('div');
    deviceHeader.className = 'device-header';
    
    const deviceTitle = document.createElement('div');
    deviceTitle.className = 'device-title';
    deviceTitle.textContent = device.title;
    
    const deviceIcon = document.createElement('div');
    deviceIcon.className = `device-icon device-${device.status}`;
    deviceIcon.innerHTML = device.icon;
    
    deviceHeader.appendChild(deviceTitle);
    deviceHeader.appendChild(deviceIcon);
    deviceCard.appendChild(deviceHeader);
    
    // Create content based on device type
    const deviceContent = document.createElement('div');
    deviceContent.className = 'device-content';
    
    if (device.type === 'toggle') {
      const toggleContainer = document.createElement('div');
      toggleContainer.className = 'toggle-container';
      
      const statusText = document.createElement('span');
      statusText.className = device.status === 'active' ? 'device-active' : 'device-inactive';
      statusText.textContent = device.status === 'active' ? 'On' : 'Off';
      
      const switchLabel = document.createElement('label');
      switchLabel.className = 'switch';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = device.status === 'active';
      checkbox.addEventListener('change', (e) => {
        device.status = e.target.checked ? 'active' : 'inactive';
        statusText.textContent = e.target.checked ? 'On' : 'Off';
        statusText.className = e.target.checked ? 'device-active' : 'device-inactive';
        deviceIcon.className = `device-icon device-${device.status}`;
        device.lastUpdated = new Date();
        updateDeviceTimestamp(device);
      });
      
      const slider = document.createElement('span');
      slider.className = 'slider';
      
      switchLabel.appendChild(checkbox);
      switchLabel.appendChild(slider);
      
      toggleContainer.appendChild(statusText);
      toggleContainer.appendChild(switchLabel);
      deviceContent.appendChild(toggleContainer);
      
    } else if (device.type === 'slider') {
      const sliderContainer = document.createElement('div');
      sliderContainer.className = 'slider-container';
      
      const sliderHeader = document.createElement('div');
      sliderHeader.className = 'slider-header';
      
      const valueText = document.createElement('span');
      valueText.className = device.value > 0 ? 'device-active' : 'device-inactive';
      valueText.textContent = `${device.value}%`;
      
      sliderHeader.appendChild(valueText);
      
      const rangeInput = document.createElement('input');
      rangeInput.type = 'range';
      rangeInput.min = '0';
      rangeInput.max = '100';
      rangeInput.value = device.value;
      rangeInput.className = 'range-slider';
      
      rangeInput.addEventListener('input', (e) => {
        device.value = parseInt(e.target.value);
        valueText.textContent = `${device.value}%`;
        valueText.className = device.value > 0 ? 'device-active' : 'device-inactive';
        device.status = device.value > 0 ? 'active' : 'inactive';
        deviceIcon.className = `device-icon device-${device.status}`;
        device.lastUpdated = new Date();
        updateDeviceTimestamp(device);
      });
      
      sliderContainer.appendChild(sliderHeader);
      sliderContainer.appendChild(rangeInput);
      deviceContent.appendChild(sliderContainer);
      
    } else if (device.type === 'sensor') {
      const sensorReading = document.createElement('div');
      sensorReading.className = 'sensor-reading';
      
      const sensorValue = document.createElement('span');
      sensorValue.className = 'sensor-value';
      sensorValue.textContent = device.value;
      
      const sensorUnit = document.createElement('span');
      sensorUnit.className = 'sensor-unit';
      sensorUnit.textContent = device.unit;
      
      sensorReading.appendChild(sensorValue);
      sensorReading.appendChild(sensorUnit);
      deviceContent.appendChild(sensorReading);
    }
    
    deviceCard.appendChild(deviceContent);
    
    // Create footer with timestamp
    const deviceFooter = document.createElement('div');
    deviceFooter.className = 'device-footer';
    deviceFooter.textContent = `Last updated: ${formatTimeAgo(device.lastUpdated)}`;
    deviceCard.appendChild(deviceFooter);
    
    // Add device to grid
    deviceGrid.appendChild(deviceCard);
  });
}

// Update device timestamp
function updateDeviceTimestamp(device) {
  const deviceCard = document.getElementById(device.id);
  if (deviceCard) {
    const footer = deviceCard.querySelector('.device-footer');
    if (footer) {
      footer.textContent = `Last updated: ${formatTimeAgo(device.lastUpdated)}`;
    }
  }
}

// Update all timestamps
function updateAllTimestamps() {
  devices.forEach(device => {
    updateDeviceTimestamp(device);
  });
}

// Show modal
function showAddDeviceModal() {
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('visible');
  }, 10);
}

// Hide modal
function hideAddDeviceModal() {
  modal.classList.remove('visible');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}

// Toggle form fields based on device type
function toggleFormFields() {
  const deviceType = deviceTypeSelect.value;
  
  if (deviceType === 'sensor' || deviceType === 'slider') {
    valueContainer.classList.remove('hidden');
  } else {
    valueContainer.classList.add('hidden');
  }
  
  if (deviceType === 'sensor') {
    unitContainer.classList.remove('hidden');
  } else {
    unitContainer.classList.add('hidden');
  }
}

// Generate unique ID for new device
function generateUniqueId(type, room) {
  const typePrefix = type.split('-')[0] || type;
  const roomSuffix = room.toLowerCase().replace(/\s+/g, '-');
  const count = devices.filter(d => d.id.startsWith(typePrefix)).length + 1;
  return `${typePrefix}-${count}`;
}

// Add new device
function addNewDevice(e) {
  e.preventDefault();
  
  // Get form values
  const deviceTitle = document.getElementById('device-title').value;
  const deviceType = document.getElementById('device-type').value;
  const deviceRoom = document.getElementById('device-room').value;
  const deviceValue = document.getElementById('device-value').value ? 
    parseInt(document.getElementById('device-value').value) : 
    (deviceType === 'slider' ? 0 : null);
  const deviceUnit = document.getElementById('device-unit').value || '';
  
  // Generate unique ID
  const deviceId = generateUniqueId(deviceType, deviceRoom);
  
  // Create device icon based on type
  let deviceIcon = '';
  switch (deviceType) {
    case 'toggle':
      deviceIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>`;
      break;
    case 'slider':
      deviceIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>`;
      break;
    case 'sensor':
      deviceIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>`;
      break;
    default:
      deviceIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>`;
  }
  
  // Create new device object
  const newDevice = {
    id: deviceId,
    title: deviceTitle,
    type: deviceType,
    status: 'inactive',
    room: deviceRoom,
    lastUpdated: new Date(),
    icon: deviceIcon
  };
  
  // Add value and unit if applicable
  if (deviceValue !== null) {
    newDevice.value = deviceValue;
  }
  
  if (deviceUnit) {
    newDevice.unit = deviceUnit;
  }
  
  // Add to devices array
  devices.push(newDevice);
  
  // Reset form
  addDeviceForm.reset();
  
  // Hide modal
  hideAddDeviceModal();
  
  // Re-render devices
  renderDevices();
  
  // Show toast notification
  showToast(`Device "${deviceTitle}" added successfully!`);
}

// Show toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// Check if mobile based on screen width
function isMobile() {
  return window.innerWidth < 768;
}

// Initialize the UI
function init() {
  // Apply theme on load
  applyTheme();
  
  // Set initial sidebar state based on screen size
  if (isMobile()) {
    sidebar.classList.add('closed');
  }
  
  // Render devices
  renderDevices();
  
  // Event listeners
  sidebarToggle.addEventListener('click', toggleSidebar);
  
  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    applyTheme();
  });
  
  addDeviceBtn.addEventListener('click', showAddDeviceModal);
  closeModal.addEventListener('click', hideAddDeviceModal);
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideAddDeviceModal();
    }
  });
  
  // Toggle form fields based on device type
  deviceTypeSelect.addEventListener('change', toggleFormFields);
  
  // Form submission
  addDeviceForm.addEventListener('submit', addNewDevice);
  
  // Update timestamps every minute
  setInterval(updateAllTimestamps, 60000);
  
  // Listen for window resize
  window.addEventListener('resize', () => {
    if (isMobile()) {
      sidebar.classList.add('closed');
    } else {
      sidebar.classList.remove('closed');
    }
  });
  
  // Handle navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      if (isMobile()) {
        sidebar.classList.add('closed');
      }
    });
  });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);

