  // attribute vec4 a_position;
  attribute vec2 aPosition;
  uniform vec2 uResolution;
 
  // all shaders have a main function
  void main() {
 
     // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = aPosition / uResolution;

    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;

    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
    // gl_Position is a special variable a vertex shader
    // is responsible for setting
    // gl_Position = vec4(clipSpace, 0, 1);

    // flip y
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);

  }