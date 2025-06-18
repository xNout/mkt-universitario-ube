import Image from "next/image";

export default function Home() {
	return (

		<div className="relative min-h-screen inter-font">


			<div className="login-wrapper">

				{/* Falta el responsive de aqui para abajo */}
				<div className="w-md p-6 pb-8 bg-[#262626] bg-opacity-50 rounded-lg shadow-lg">

					<div className="w-full">
						<Image
							className="mx-auto mb-3"
							src="/ube-logo-texto.png"
							alt="UBE-LOGO"
							width={220}
							height={45}
							priority
						/>
					</div>

					<div className="mb-5 mt-5">
						<p className="text-center text-xl text-white inter-font font-bold">
							MARKETPLACE UNIVERSITARIO
						</p>
					</div>


					<form className="space-y-4 pl-5 pr-5 form-login">

						<div className="input-group">
							<label htmlFor="email">Correo electrónico</label>
							<input
								type="email"
								name="email"
								placeholder="Correo electrónico"
								className="input-form"
								autoComplete="off"
							/>
						</div>


						<div className="input-group">
							<label htmlFor="password">Contraseña</label>
							<input
								type="password"
								name="password"
								placeholder="Contraseña"
								className="input-form"
								autoComplete="off"
							/>
						</div>

						<div className="input-group">
							<a href="#" className="text-md">
								¿Olvidaste tu contraseña?
							</a>

							<button
								type="submit"
								className="mt-2 w-full py-2 bg-[#e3132d] text-md text-white rounded hover:bg-[#BF0F27] transition cursor-pointer"
							>
								Iniciar sesión
							</button>
						</div>

					</form>
				</div>

				<div className="w-md p-6 bg-[#262626] bg-opacity-50 rounded-lg shadow-lg">

					<h2 className="text-center text-xl font-bold mb-4 text-[#e3132d]">
						¿Aún no tienes cuenta?
					</h2>
					<p className="text-md text-center text-white">
						Carreras de pre y post grado, cursos, diplomados, pasantías, etc. Todo en un solo lugar, para ti.
					</p>

					<button
						type="submit"
						className="mt-3 w-full py-2 bg-[#e3132d] text-md text-white rounded hover:bg-[#BF0F27] transition cursor-pointer"
					>
						Crear cuenta
					</button>
				</div>



			</div>
		</div>




	);
}
