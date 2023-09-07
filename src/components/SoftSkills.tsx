const SoftSkills = () => {
  const skills = [
    'proatividade',
    'curiosidade',
    'liderança',
    'auto aprendizado',
    'sinceridade',
    'compromisso',
    'ambição',
    'paciência'
  ]

  return (
    <div className="h-16 overflow-hidden px-4 bg-sky-500/50 flex items-center lg:justify-center">
      <div className="flex gap-10 min-w-[1200px] animate-scroll lg:animate-none lg:justify-center">
        {skills.map((skill) => (
          <span key={skill} className="uppercase flex">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SoftSkills
