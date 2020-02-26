
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;

void main( )
{
	vec2 pos = (gl_FragCoord.xy * 2.0 - uResolution)/max(uResolution.x, uResolution.y);
		
	
	float c1 = .15 / length(vec2(pos.y,cos(pos.x*9.0+uTime)*0.1)-pos);
	float c2 = .15 / length(vec2(pos.y,cos(pos.x*6.0+uTime)*0.1)-pos);
	float c3 = .15 / length(vec2(pos.y,sin(pos.x*3.0+uTime)*0.1)-pos);	
	
	gl_FragColor = vec4(c1,c2,c3,1.0);
}



// void main() {
//     vec3 color = vec3(
//         sin(vTexCoord.x + uTime) / 2.0 + 0.5,
//         sin(vTexCoord.y + uTime + 1.0) / 2.0 + 0.5,
//         sin(-uTime) / 2.0 + 0.5);
//     gl_FragColor = vec4(color, 1.0);
// }