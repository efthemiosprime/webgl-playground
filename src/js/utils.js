
export const createShader = (gl, source, type) => {
   const shader = gl.createShader(type)
   gl.shaderSource(shader, source)
   gl.compileShader(shader)

   const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
   if (success) return shader

   console.log(gl.getShaderInfoLog(shader)) 
   gl.deleteShader(shader)
}
 
export const createProgram = (gl, vertexShader, fragmentShader) => {
   const program = gl.createProgram()
   gl.attachShader(program, vertexShader)
   gl.attachShader(program, fragmentShader)
   gl.linkProgram(program)
   const success = gl.getProgramParameter(program, gl.LINK_STATUS) || gl.getProgramParameter(program, gl.VALIDATE_STATUS)

   gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
   gl.clearColor(0, 0, 0, 0);
   gl.clear(gl.COLOR_BUFFER_BIT);

   if (success) return program

   console.log(gl.getProgramInfoLog(program))
   gl.deleteProgram(program)
}


export const screenQuad = (gl) => {
   const vertexPosBuffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
   const vertices = [-1, -1, 1, -1, -1, 1, 1, 1];
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
   vertexPosBuffer.itemSize = 2;
   vertexPosBuffer.numItems = 4;
   return vertexPosBuffer;
}


export const createGL = (stage) => {
   const canvas = document.querySelector(stage)
   const gl = canvas.getContext("webgl")

   if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth ;
      canvas.height = window.innerHeight;
    }
   
   if (!gl) {
      gl = canvas.getContext('experimental-webgl')
      console.error("Your browser does not support WebGL")
      return
   }

   return gl
}