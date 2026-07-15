import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import {
  ArrowLeft,
  Building2,
  Mail,
  MapPin,
  Phone,
  Save,
  UserRound,
} from "lucide-react";

export default function NewClientPage() {
  return (
    <main className="min-h-screen bg-[#030617] text-white">
      <Sidebar />

      <div className="lg:ml-72">
        <Topbar />

        <section className="px-6 py-8 lg:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Link
                href="/dashboard/clientes"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-cyan-400"
              >
                <ArrowLeft size={17} />
                Voltar para clientes
              </Link>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Gestão de clientes
              </p>

              <h2 className="mt-3 text-3xl font-extrabold">
                Cadastrar novo cliente
              </h2>

              <p className="mt-2 max-w-2xl text-slate-400">
                Preencha as informações para cadastrar uma pessoa física ou
                empresa no escritório.
              </p>
            </div>
          </div>

          <form className="mt-8 space-y-6">
            <section className="rounded-2xl border border-slate-800 bg-[#05091c]">
              <div className="border-b border-slate-800 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <UserRound size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Informações principais
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Dados básicos de identificação do cliente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 p-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="clientType"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Tipo de cliente
                  </label>

                  <select
                    id="clientType"
                    name="clientType"
                    defaultValue="pessoa-fisica"
                    className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 text-sm text-white outline-none transition focus:border-cyan-500"
                  >
                    <option value="pessoa-fisica">Pessoa física</option>
                    <option value="pessoa-juridica">Pessoa jurídica</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Status
                  </label>

                  <select
                    id="status"
                    name="status"
                    defaultValue="ativo"
                    className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 text-sm text-white outline-none transition focus:border-cyan-500"
                  >
                    <option value="ativo">Ativo</option>
                    <option value="pendente">Pendente</option>
                    <option value="inativo">Inativo</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Nome completo ou razão social
                  </label>

                  <div className="relative">
                    <UserRound
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Digite o nome do cliente"
                      className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="document"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    CPF ou CNPJ
                  </label>

                  <input
                    id="document"
                    name="document"
                    type="text"
                    placeholder="000.000.000-00"
                    className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="birthDate"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Data de nascimento ou abertura
                  </label>

                  <input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 text-sm text-white outline-none transition focus:border-cyan-500"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-[#05091c]">
              <div className="border-b border-slate-800 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Phone size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Informações de contato
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Canais utilizados pelo escritório para contato.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 p-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    E-mail
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="cliente@email.com"
                      className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Telefone ou WhatsApp
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(64) 99999-9999"
                      className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-[#05091c]">
              <div className="border-b border-slate-800 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Endereço</h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Informações de localização do cliente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 p-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="zipCode"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    CEP
                  </label>

                  <input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    placeholder="00000-000"
                    className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Cidade
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Itumbiara"
                    className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Estado
                  </label>

                  <select
                    id="state"
                    name="state"
                    defaultValue="GO"
                    className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 text-sm text-white outline-none transition focus:border-cyan-500"
                  >
                    <option value="GO">Goiás</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="SP">São Paulo</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="MT">Mato Grosso</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="neighborhood"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Bairro
                  </label>

                  <input
                    id="neighborhood"
                    name="neighborhood"
                    type="text"
                    placeholder="Digite o bairro"
                    className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Endereço completo
                  </label>

                  <div className="relative">
                    <Building2
                      size={18}
                      className="pointer-events-none absolute left-4 top-4 text-slate-500"
                    />

                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Rua, avenida, número e complemento"
                      className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-[#05091c] p-6">
              <label
                htmlFor="notes"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Observações
              </label>

              <textarea
                id="notes"
                name="notes"
                rows={5}
                placeholder="Inclua informações adicionais importantes sobre o cliente..."
                className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
              />
            </section>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Link
                href="/dashboard/clientes"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                Cancelar
              </Link>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-400"
              >
                <Save size={19} />
                Salvar cliente
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}