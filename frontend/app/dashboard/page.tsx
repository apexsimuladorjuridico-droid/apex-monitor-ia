import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { Plus, Search, UserRound } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "João da Silva",
    document: "123.456.789-00",
    email: "joao@email.com",
    phone: "(64) 99999-1001",
    processes: 3,
    status: "Ativo",
  },
  {
    id: 2,
    name: "Empresa Horizonte Ltda.",
    document: "12.345.678/0001-90",
    email: "juridico@horizonte.com.br",
    phone: "(64) 99999-1002",
    processes: 7,
    status: "Ativo",
  },
  {
    id: 3,
    name: "Mariana Oliveira",
    document: "987.654.321-00",
    email: "mariana@email.com",
    phone: "(64) 99999-1003",
    processes: 2,
    status: "Pendente",
  },
];

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-[#030617] text-white">
      <Sidebar />

      <div className="lg:ml-72">
        <Topbar />

        <section className="px-6 py-8 lg:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Gestão de clientes
              </p>

              <h2 className="mt-3 text-3xl font-extrabold">Clientes</h2>

              <p className="mt-2 max-w-2xl text-slate-400">
                Consulte clientes, acompanhe processos vinculados e organize os
                dados do escritório.
              </p>
            </div>

            <Link
              href="/dashboard/clientes/novo"
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-400"
            >
              <Plus size={19} />
              Novo cliente
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-[#05091c]">
            <div className="border-b border-slate-800 p-5">
              <div className="relative max-w-lg">
                <Search
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="search"
                  placeholder="Pesquisar por nome, CPF, CNPJ ou e-mail..."
                  className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left">
                <thead className="border-b border-slate-800 bg-slate-950/50">
                  <tr className="text-xs uppercase tracking-wider text-slate-500">
                    <th className="px-6 py-4">Cliente</th>
                    <th className="px-6 py-4">Documento</th>
                    <th className="px-6 py-4">Contato</th>
                    <th className="px-6 py-4">Processos</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Ação</th>
                  </tr>
                </thead>

                <tbody>
                  {clients.map((client) => (
                    <tr
                      key={client.id}
                      className="border-b border-slate-800 transition last:border-b-0 hover:bg-slate-950/40"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                            <UserRound size={20} />
                          </div>

                          <div>
                            <p className="font-semibold text-white">
                              {client.name}
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              Cliente #{client.id.toString().padStart(4, "0")}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-300">
                        {client.document}
                      </td>

                      <td className="px-6 py-5">
                        <p className="text-sm text-slate-300">{client.email}</p>

                        <p className="mt-1 text-xs text-slate-500">
                          {client.phone}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <span className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-300">
                          {client.processes}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            client.status === "Ativo"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-amber-500/10 text-amber-400"
                          }`}
                        >
                          {client.status}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-right">
                        <Link
                          href={`/dashboard/clientes/${client.id}`}
                          className="font-semibold text-cyan-400 transition hover:text-cyan-300"
                        >
                          Abrir ficha
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}