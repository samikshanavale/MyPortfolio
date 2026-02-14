import WaveDivider from './WaveDivider';

export default function Projects() {

  return (
    <>
    <WaveDivider className="text-amber-100 -mt-1" />
<section id="about" className="bg-amber-100 pt-32 pb-20 px-2">
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        <div className="space-y-5 text-gray-800 leading-relaxed font-allerta">
  <h2 className="text-3xl font-bold font-allerta">About Me</h2>

  <p>
    Hi, I'm Samiksha and I like to call myself an Imagineer.
  </p>

  <p>
    Because I enjoy building the things I first see only in my imagination,
    ideas that don’t yet exist, but can be brought to life through technology.
    I love experimenting, exploring, and learning how far technology can stretch
    beyond a screen.
  </p>

  <p>
    Whether it’s software, designing, or Extended Reality (XR), I’m drawn to creating
    experiences rather than just applications.
  </p>

  <p>
    I don’t just build for functionality — I build for reactions.
    Seeing someone smile, get curious, or feel immersed in something I created
    is what excites me the most.
  </p>

</div>
<div className="flex justify-center">
  <div className="relative group">
    <img
      src="src/img/me.png"
      alt="Samiksha"
      className="w-70 md:w-74 rounded-3xl shadow-2xl object-cover transition duration-500 group-hover:scale-105"
    />

  </div>
</div>

<div className="font-allerta">
  <h2 className="skills-title">Skills:</h2>

  <div className="skills-canvas">
    <img src="src/img/skills/blender.png" className="skill s1"/>
    <img src="src/img/skills/unity.png" className="skill s2"/>
    <img src="src/img/skills/vscode.png" className="skill s3"/>
    <img src="src/img/skills/figma.png" className="skill s4"/>
    <img src="src/img/skills/react.png" className="skill s5"/>
    <img src="src/img/skills/java.png" className="skill s6"/>
    <img src="src/img/skills/mysql.png" className="skill s7"/>
    <img src="src/img/skills/csharp.png" className="skill s8"/>
    <img src="src/img/skills/canva.png" className="skill s9"/>
    <img src="src/img/skills/androidStudio.png" className="skill s10"/>
    <img src="src/img/skills/django.jpg" className="skill s11"/>
    <img src="src/img/skills/htmlcss.png" className="skill s12"/>
    <img src="src/img/skills/selenium.png" className="skill s13"/>



  </div>
</div>



        </div>
      </section>
      <WaveDivider className="text-purple-200 -mt-1" flip />
    </>
  );
}
