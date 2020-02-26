import VertexText from '../shaders/hello/vertex.glsl'
import FragmentText from '../shaders/hello/fragment.glsl'
import {createShader, createProgram, createGL} from './utils.js'

export const Hello = () => {
  const gl = createGL('#canvas')
  const vertexShader = createShader(gl, VertexText, gl.VERTEX_SHADER)
  const fragmentShader = createShader(gl, FragmentText, gl.FRAGMENT_SHADER)
  const program = createProgram(gl, vertexShader, fragmentShader)
  gl.useProgram(program)
  
  
  const resolutionUniformLocation = gl.getUniformLocation(program, "uResolution")
  const positionAttributeLocation = gl.getAttribLocation(program, "aPosition")
  const colorUniformLocation = gl.getUniformLocation(program, "uColor");
  
  const positionBuffer = gl.createBuffer()
  
  // three 2d points
  const positions = [
     10, 0,
     150,  125,
    10,  100,
  ]
  
  console.log()
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
  
  
  gl.enableVertexAttribArray(positionAttributeLocation)
  gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height)
  
  
  const size = 2;          // 2 components per iteration
  const type = gl.FLOAT;   // the data is 32bit floats
  const normalize = true; // don't normalize the data
  const stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
  let offset = 0;        // start at the beginning of the buffer
  gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)
      // Set a random color.
  gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1);
  
  const primitiveType = gl.TRIANGLES;
  const count = positions.length/2;
  offset = 0;
  gl.drawArrays(primitiveType, offset, count);
}