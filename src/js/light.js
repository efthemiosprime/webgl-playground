import VertexText from '../shaders/light/vertex.glsl'
import FragmentText from '../shaders/light/fragment.glsl'
import {createShader, createProgram, createGL, screenQuad} from './utils.js'

export const Light = () => {
   const gl = createGL('#canvas')
   const vertexShader = createShader(gl, VertexText, gl.VERTEX_SHADER)
   const fragmentShader = createShader(gl, FragmentText, gl.FRAGMENT_SHADER)
   const program = createProgram(gl, vertexShader, fragmentShader)
   gl.useProgram(program)
   
   
   const vertexPosBuffer = screenQuad(gl)
   program.vertexPosAttrib = gl.getAttribLocation(program, 'aVertexPosition');
   program.offsetUniform = gl.getUniformLocation(program, 'uOffset');
   program.aspectUniform = gl.getUniformLocation(program, 'uAspect');
   program.timeUniform = gl.getUniformLocation(program, 'uTime');
   const resolutionUniformLocation = gl.getUniformLocation(program, "uResolution")
   
   gl.enableVertexAttribArray(program.vertexPosAttrib)
   gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, false, 0, 0)
   
   const offset = [1, 1]
   gl.uniform2f(program.offsetUniform, offset[0], offset[1])
   gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height)
   
   const startTime = new Date().getTime()
   
   const animate = () => {
      const realTime = (new Date().getTime() - startTime) * 0.001
      gl.uniform1f(program.timeUniform, realTime)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
   
      requestAnimationFrame(animate)
   }
   
   animate()
}

