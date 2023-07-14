window.onload = function () {
  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return window.scrollY
  }, {
    frameStep: 1
  })

  // Add animation bindings to elements
  lax.addElements('.scaleUp', {
    scrollY: {
      scale: [
        ["elInY", "elCenterY", "elOutY"],
        [0.9, 1, 0.8],
      ],
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, "100"],
      ],
      blur: [
        ["elInY", "elCenterY-200"],
        [10, 0],
      ]
    }
  })

  lax.addElements(".sticky", {},
    {
      style: {
        position: "sticky",
        top: "50px"
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
}