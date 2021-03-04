var APP_DATA = {
  "scenes": [
    {
      "id": "0-adobe-lr-export",
      "name": "Adobe LR export",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1600,
      "initialViewParameters": {
        "yaw": 0.782053697370694,
        "pitch": 0.24545711703754947,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": 0.7454802621425856,
          "pitch": 0.1265733478372102,
          "rotation": 0,
          "target": "1-portico_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-portico_1",
      "name": "Portico_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.33667245719792405,
        "pitch": -0.043923905154091614,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": 0.36153251997152225,
          "pitch": -0.03358886873450828,
          "rotation": 0,
          "target": "0-adobe-lr-export"
        },
        {
          "yaw": -1.9977531189821374,
          "pitch": -0.02153472104377485,
          "rotation": 0,
          "target": "2-drawingroom_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-drawingroom_1",
      "name": "drawingroom_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4929041842820876,
          "pitch": -0.048550231022641555,
          "rotation": 0,
          "target": "1-portico_1"
        },
        {
          "yaw": -0.2249204462612724,
          "pitch": 0.006751544934500586,
          "rotation": 0,
          "target": "3-room_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-room_1",
      "name": "room_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.961962384415667,
          "pitch": 0.02007829775596015,
          "rotation": 0,
          "target": "2-drawingroom_1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
