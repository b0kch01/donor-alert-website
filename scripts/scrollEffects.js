window.onload = function () {
  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return window.scrollY
  }, {
    frameStep: 1,
    easing: "easeInOutQuint"
  })

  // Add animation bindings to elements
  lax.addElements('.scaleUp', {
    scrollY: {
      scale: [
        ["elInY", "elCenterY", "elOutY"],
        [1.5, 1, 0.6],
      ],
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, "100"],
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
        ["elCenterY-200", "elCenterY"],
        [0.5, 1],
      ],
      opacity: [
        ["elCenterY-200", "elCenterY"],
        [0, 1],
      ]
    }
  })

  lax.addElements(".scaleDown", {
    scrollY: {
      scale: [
        ["elInY", "elCenterY"],
        [1.3, 1],
      ]
    }
  })

  lax.addElements(".drag", {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY-50"],
        [140, 0],
      ],
      opacity: [
        ["elInY", "elCenterY-50"],
        [0, 1],
      ]
    }
  })
  lax.addElements(".drag2", {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY"],
        [140, 0],
      ],
      opacity: [
        ["elInY", "elCenterY"],
        [0, 1],
      ]
    }
  })
  lax.addElements(".drag3", {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY+50"],
        [140, 0],
      ],
      opacity: [
        ["elInY", "elCenterY+50"],
        [0, 1],
      ]
    }
  })
}