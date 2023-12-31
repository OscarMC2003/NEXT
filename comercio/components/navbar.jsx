import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'


export default function Navbar() {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="/">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/registro">Registro</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    )
}