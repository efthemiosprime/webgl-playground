 // fragment shaders don't have a default precision so we need
  // to pick one. mediump is a good default
#ifdef GL_ES
precision mediump float;
#endif

uniform vec4 uColor;
 
  void main() {
    // gl_FragColor is a special variable a fragment shader
    // is responsible for setting
    gl_FragColor = uColor;
  }