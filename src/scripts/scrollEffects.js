
function initializeScrollAnimations() {
  console.log("✨ Recalculating scroll positions")

  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return window.scrollY
  }, {
    frameStep: 0.5,
    easing: "easeInOutQuart"
  })

  // Add animation bindings to elements
  lax.addElements('.scaleUp', {
    scrollY: {
      scale: [
        ["elInY", "elCenterY", "elCenterY+250"],
        [1.5, 1, 0.7],
      ],
      translateY: [
        ["elInY", "elCenterY", "elCenterY+250"],
        [0, 0, 100],
      ],
      blur: [
        ["elInY", "elCenterY-200"],
        [10, 0],
      ],
      rotateX: [
        ["elInY", "elCenterY"],
        [45, 0],
      ]
    }
  }, {
    style: {
      perspective: "2000px"
    }
  })

  lax.addElements(".sticky", {},
    {
      style: {
        position: "sticky",
        top: "50px"
      }
    })

  lax.addElements(".fadeIn", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY"],
        [0, 1],
      ],
    }
  })

  lax.addElements(".fadeOut", {
    scrollY: {
      opacity: [
        ["elCenterY", "elOutY"],
        [1, 0.5],
      ],
      translateY: [
        ["elCenterY", "elOutY"],
        [0, 200],
      ],
      blur: [
        ["elCenterY+200", "elOutY"],
        [0, 10],
      ]
    }
  })

  lax.addElements(".scale", {
    scrollY: {
      scaleX: [
        ["elInY", "elInY+500"],
        [0.5, 1],
      ],
      opacity: [
        ["elInY", "elInY+500"],
        [0, 1],
      ]
    }
  })

  lax.addElements(".scaleDown", {
    scrollY: {
      scale: [
        ["elInY", "elCenterY-200"],
        [1.3, 1],
      ],
      opacity: [
        ["elInY", "elCenterY-200"],
        [0, 1],
      ]

    }
  })

  lax.addElements(".drag", {
    scrollY: {
      translateY: [
        ["elInY+150", "elInY+200"],
        [10, 0],
      ],
      opacity: [
        ["elInY+150", "elInY+200"],
        [0, 1],
      ]
    }
  })
  lax.addElements(".drag2", {
    scrollY: {
      translateY: [
        ["elInY+180", "elInY+250"],
        [10, 0],
      ],
      opacity: [
        ["elInY+180", "elInY+250"],
        [0, 1],
      ]
    }
  })
  lax.addElements(".drag3", {
    scrollY: {
      translateY: [
        ["elInY+230", "elInY+300"],
        [10, 0],
      ],
      opacity: [
        ["elInY+230", "elInY+300"],
        [0, 1],
      ]
    }
  })

  lax.addElements(".phones > .left", {
    scrollY: {
      translateX: [
        ["elInY-100", "elInY+200"],
        [0, -140]
      ],
      translateY: [
        ["elInY", "elOutY"],
        [100, -80]
      ]
    }
  })

  lax.addElements(".phones > .lefter", {
    scrollY: {
      translateX: [
        ["elInY-100", "elInY+240"],
        [0, -240]
      ],
      translateY: [
        ["elInY", "elOutY"],
        [70, -10]
      ]
    }
  })

  lax.addElements(".phones > .right", {
    scrollY: {
      translateX: [
        ["elInY-100", "elInY+200"],
        [0, 140]
      ],
      translateY: [
        ["elInY", "elOutY"],
        [100, -80]
      ]
    }
  })

  lax.addElements(".phones > .righter", {
    scrollY: {
      translateX: [
        ["elInY-100", "elInY+240"],
        [0, 240]
      ],
      translateY: [
        ["elInY", "elOutY"],
        [70, -10]
      ]
    }
  })

  lax.addElements(".phones > .main", {
    scrollY: {
      translateY: [
        ["elInY", "elOutY"],
        [120, -150]
      ]
    }
  })

  lax.addElements(".phones", {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY/2 - elInY/2 + elInY"],
        [0, -50]
      ],
      scale: [
        ["elInY", "elCenterY/2"],
        [1.3, 1]
      ],
      opacity: [
        ["elInY", "elCenterY"],
        [0.1, 1]
      ]
    }
  })

  lax.addElements(".part2-title", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY"],
        [0, 1]
      ]
    }
  })

  lax.addElements(".slower", {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY"],
        [-50, 0]
      ]
    }
  })

  lax.addElements(".up", {
    scrollY: {
      translateY: [
        ["elInY-150", "elCenterY"],
        [150, 0]
      ],
      opacity: [
        ["elInY-150", "elCenterY"],
        [0.1, 1]
      ]
    }
  })

  lax.addElements(".up2", {
    scrollY: {
      translateY: [
        ["elInY+250", "elCenterY+50"],
        [150, 0]
      ],
      opacity: [
        ["elInY+250", "elCenterY+50"],
        [0.1, 1]
      ]
    }
  })
}


// window.addEventListener("resize", function () {
//   clearTimeout(window.resizedFinished)
//   window.resizedFinished = setTimeout(function () {
//     console.log("Resized")
//     initializeScrollAnimations();
//   }, 500)
// })

initializeScrollAnimations();