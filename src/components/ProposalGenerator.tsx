import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Upload, Download, Trash2, Plus, X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell, WidthType, ImageRun } from 'docx';

interface Service {
  title: string;
  unit: number;
  qtd: number;
}

const STORAGE_KEY = 'r9_meeting_v1';
const LOGO_KEY = 'r9_logo_base64';
const SIG_KEY = 'r9_signature_base64';
const EVANDRO_NAME = 'Evandro';
const EVANDRO_TITLE = 'Diretor de Projetos, CEO';

export default function ProposalGenerator() {
  useScrollAnimation();

  // Form state
  const [cliente, setCliente] = useState('');
  const [documento, setDocumento] = useState('');
  const [contato, setContato] = useState('');
  const [email, setEmail] = useState('');
  const [dataProposta, setDataProposta] = useState(() => new Date().toISOString().slice(0, 10));
  const [prazo, setPrazo] = useState('30');
  const [condicoes, setCondicoes] = useState('50% entrada / 50% na entrega');
  const [observacoes, setObservacoes] = useState('');
  const [services, setServices] = useState<Service[]>([
    { title: 'Motion Design', unit: 1200, qtd: 1 }
  ]);

  // New service inputs
  const [newServiceTitle, setNewServiceTitle] = useState('');
  const [newServiceUnit, setNewServiceUnit] = useState('');
  const [newServiceQtd, setNewServiceQtd] = useState('1');

  // Logo and signature
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [signaturePreview, setSignaturePreview] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  // Load saved data
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        setCliente(data.cliente || '');
        setDocumento(data.documento || '');
        setContato(data.contato || '');
        setEmail(data.email || '');
        setDataProposta(data.data_proposta || dataProposta);
        setPrazo(data.prazo || '30');
        setCondicoes(data.condicoes || '50% entrada / 50% na entrega');
        setObservacoes(data.observacoes || '');
        if (data.services) setServices(data.services);
      }

      const logoB64 = localStorage.getItem(LOGO_KEY);
      if (logoB64) setLogoPreview('data:image/png;base64,' + logoB64);

      const sigB64 = localStorage.getItem(SIG_KEY);
      if (sigB64) setSignaturePreview('data:image/png;base64,' + sigB64);
    } catch (e) {
      console.warn('Load error:', e);
    }
  }, []);

  // Save data
  const saveState = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        cliente, documento, contato, email, data_proposta: dataProposta,
        prazo, condicoes, observacoes, services
      }));
    } catch (e) {
      console.warn('Save error:', e);
    }
  };

  useEffect(() => {
    saveState();
  }, [cliente, documento, contato, email, dataProposta, prazo, condicoes, observacoes, services]);

  // Canvas signature
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const ratio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.scale(ratio, ratio);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#111';

    const sigB64 = localStorage.getItem(SIG_KEY);
    if (sigB64) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, rect.width, rect.height);
      img.src = 'data:image/png;base64,' + sigB64;
    }
  }, []);

  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);
    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    setLastPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    setLastPos({ x, y });
  };

  const stopDrawing = () => setIsDrawing(false);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    localStorage.removeItem(SIG_KEY);
    setSignaturePreview(null);
  };

  const confirmSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const base64 = dataUrl.split(',')[1];
    localStorage.setItem(SIG_KEY, base64);
    setSignaturePreview(dataUrl);
    toast.success('Assinatura confirmada e salva!');
  };

  // Services
  const addService = () => {
    if (!newServiceTitle.trim()) {
      toast.error('Preencha o título do serviço');
      return;
    }
    setServices([...services, {
      title: newServiceTitle,
      unit: Number(newServiceUnit) || 0,
      qtd: Number(newServiceQtd) || 1
    }]);
    setNewServiceTitle('');
    setNewServiceUnit('');
    setNewServiceQtd('1');
    toast.success('Serviço adicionado!');
  };

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const updateService = (index: number, field: keyof Service, value: string | number) => {
    setServices(services.map((s, i) => i === index ? { ...s, [field]: value } : s));
  };

  const calcTotal = () => services.reduce((acc, s) => acc + s.unit * s.qtd, 0);

  const money = (v: number) => v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const getValidityDate = () => {
    const d = new Date(dataProposta);
    d.setDate(d.getDate() + 5);
    return d.toLocaleDateString('pt-BR');
  };

  // Logo upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      const base64 = dataUrl.split(',')[1];
      localStorage.setItem(LOGO_KEY, base64);
      setLogoPreview(dataUrl);
      toast.success('Logo carregado!');
    };
    reader.readAsDataURL(file);
  };

  // Helper
  const dataURLtoArrayBuffer = (dataURL: string) => {
    const parts = dataURL.split(',');
    const b64 = parts[1];
    const binaryString = atob(b64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);
    return bytes.buffer;
  };

  // Generate DOCX
  const buildPropostaDocx = async () => {
    const children = [];
    if (logoPreview) {
      const arr = dataURLtoArrayBuffer(logoPreview);
      children.push(new ImageRun({ data: arr, transformation: { width: 220, height: 80 }, type: 'png' }));
    }
    const headerPara = children.length ? new Paragraph({ children, alignment: AlignmentType.CENTER, spacing: { after: 200 } }) : new Paragraph({});

    const headerRow = new TableRow({
      children: [
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Serviço', bold: true })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Qtd', bold: true })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Unit (R$)', bold: true })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Subtotal (R$)', bold: true })] })] })
      ]
    });

    const rows = services.map(s => new TableRow({
      children: [
        new TableCell({ children: [new Paragraph(s.title)] }),
        new TableCell({ children: [new Paragraph(String(s.qtd))] }),
        new TableCell({ children: [new Paragraph(money(s.unit))] }),
        new TableCell({ children: [new Paragraph(money(s.unit * s.qtd))] })
      ]
    }));

    const table = new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [headerRow, ...rows] });

    const sigParagraphs = [];
    if (signaturePreview) {
      const sigArr = dataURLtoArrayBuffer(signaturePreview);
      sigParagraphs.push(new Paragraph({
        children: [new ImageRun({ data: sigArr, transformation: { width: 240, height: 80 }, type: 'png' })],
        alignment: AlignmentType.LEFT,
        spacing: { before: 200 }
      }));
      sigParagraphs.push(new Paragraph({ children: [new TextRun({ text: `${EVANDRO_NAME} — ${EVANDRO_TITLE}` })], alignment: AlignmentType.LEFT }));
    }

    const dataPropStr = new Date(dataProposta).toLocaleDateString('pt-BR');
    const validadeStr = getValidityDate();

    const doc = new Document({
      sections: [{
        children: [
          headerPara,
          new Paragraph({
            children: [new TextRun({ text: 'PROPOSTA COMERCIAL', bold: true, size: 32 })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),
          new Paragraph({
            children: [new TextRun({ text: `Cliente: ${cliente}\nContato: ${contato} — ${email}\nDocumento: ${documento}\nData da Proposta: ${dataPropStr}\nValidade: até ${validadeStr}` })],
            spacing: { after: 200 }
          }),
          table,
          new Paragraph({
            children: [new TextRun({ text: `Valor Total: R$ ${money(calcTotal())}`, bold: true, size: 26 })],
            alignment: AlignmentType.RIGHT,
            spacing: { before: 200, after: 200 }
          }),
          new Paragraph({
            children: [new TextRun({ text: `Prazo: ${prazo} dias úteis\nCondições de pagamento: ${condicoes}` })],
            spacing: { after: 200 }
          }),
          ...sigParagraphs,
          new Paragraph({
            children: [new TextRun({ text: 'A presente proposta tem validade de 5 (cinco) dias corridos a partir da data de envio.', italics: true })]
          })
        ]
      }]
    });

    return await Packer.toBlob(doc);
  };

  const downloadProposta = async () => {
    try {
      const blob = await buildPropostaDocx();
      const slugifiedCliente = (cliente || 'cliente').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-_]/g, '');
      const dateStr = new Date(dataProposta).toISOString().slice(0, 10);
      const filename = `Proposta-R9-${slugifiedCliente}-${dateStr}.docx`;

      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      toast.success('Proposta baixada com sucesso!');
    } catch (e) {
      console.error(e);
      toast.error('Erro ao gerar proposta');
    }
  };

  const clearAll = () => {
    if (!confirm('Limpar todos os dados?')) return;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(LOGO_KEY);
    localStorage.removeItem(SIG_KEY);
    setCliente('');
    setDocumento('');
    setContato('');
    setEmail('');
    setDataProposta(new Date().toISOString().slice(0, 10));
    setPrazo('30');
    setCondicoes('50% entrada / 50% na entrega');
    setObservacoes('');
    setServices([{ title: 'Motion Design', unit: 1200, qtd: 1 }]);
    setLogoPreview(null);
    setSignaturePreview(null);
    clearSignature();
    toast.success('Dados limpos!');
  };

  return (
    <section id="generator" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Gerador de <span className="text-gradient">Propostas</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Crie propostas profissionais em minutos com geração offline de DOCX
            </p>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Client Data */}
              <div className="glass-strong rounded-xl p-6" data-aos="fade-right">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Dados do Cliente
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome / Razão</label>
                    <Input value={cliente} onChange={(e) => setCliente(e.target.value)} placeholder="Agência XPTO" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Documento (CNPJ/CPF)</label>
                    <Input value={documento} onChange={(e) => setDocumento(e.target.value)} placeholder="00.000.000/0001-00" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Contato / Telefone</label>
                    <Input value={contato} onChange={(e) => setContato(e.target.value)} placeholder="João Silva" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="joao@xpto.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Data da Proposta</label>
                    <Input type="date" value={dataProposta} onChange={(e) => setDataProposta(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Prazo (dias úteis)</label>
                    <Input type="number" value={prazo} onChange={(e) => setPrazo(e.target.value)} min="1" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Condições de Pagamento</label>
                    <Input value={condicoes} onChange={(e) => setCondicoes(e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Observações</label>
                    <Textarea value={observacoes} onChange={(e) => setObservacoes(e.target.value)} placeholder="Observações levantadas na reunião..." rows={3} />
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="glass-strong rounded-xl p-6" data-aos="fade-right" data-aos-delay="100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Serviços
                </h3>

                {/* Add Service */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  <Input
                    placeholder="Título do serviço"
                    value={newServiceTitle}
                    onChange={(e) => setNewServiceTitle(e.target.value)}
                    className="flex-1 min-w-[200px]"
                  />
                  <Input
                    type="number"
                    placeholder="Valor unitário"
                    value={newServiceUnit}
                    onChange={(e) => setNewServiceUnit(e.target.value)}
                    className="w-32"
                  />
                  <Input
                    type="number"
                    placeholder="Qtd"
                    value={newServiceQtd}
                    onChange={(e) => setNewServiceQtd(e.target.value)}
                    className="w-20"
                    min="1"
                  />
                  <Button onClick={addService} variant="secondary">
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar
                  </Button>
                </div>

                {/* Services Table */}
                <div className="glass rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-primary/10">
                        <tr>
                          <th className="text-left p-3">Serviço</th>
                          <th className="text-center p-3 w-20">Qtd</th>
                          <th className="text-right p-3 w-32">Unit (R$)</th>
                          <th className="text-right p-3 w-32">Subtotal</th>
                          <th className="text-center p-3 w-20">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((service, index) => (
                          <tr key={index} className="border-t border-border/50">
                            <td className="p-2">
                              <Input
                                value={service.title}
                                onChange={(e) => updateService(index, 'title', e.target.value)}
                                className="h-8"
                              />
                            </td>
                            <td className="p-2">
                              <Input
                                type="number"
                                value={service.qtd}
                                onChange={(e) => updateService(index, 'qtd', Number(e.target.value))}
                                className="h-8 text-center"
                                min="1"
                              />
                            </td>
                            <td className="p-2">
                              <Input
                                type="number"
                                value={service.unit}
                                onChange={(e) => updateService(index, 'unit', Number(e.target.value))}
                                className="h-8 text-right"
                                min="0"
                                step="0.01"
                              />
                            </td>
                            <td className="p-2 text-right font-semibold">R$ {money(service.unit * service.qtd)}</td>
                            <td className="p-2 text-center">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeService(index)}
                                className="h-8 w-8 p-0"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                        <tr className="border-t-2 border-primary/30 bg-primary/5">
                          <td colSpan={3} className="p-3 text-right font-bold">VALOR TOTAL:</td>
                          <td className="p-3 text-right font-bold text-primary text-lg">R$ {money(calcTotal())}</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="glass-strong rounded-xl p-6" data-aos="fade-right" data-aos-delay="200">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Assinatura do Cliente
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Assine abaixo usando mouse, touch ou S Pen. Clique em "Confirmar" quando finalizar.
                </p>
                <canvas
                  ref={canvasRef}
                  onPointerDown={startDrawing}
                  onPointerMove={draw}
                  onPointerUp={stopDrawing}
                  onPointerCancel={stopDrawing}
                  className="w-full h-40 border-2 border-border rounded-lg bg-background cursor-crosshair"
                  style={{ touchAction: 'none' }}
                />
                <div className="flex gap-2 mt-4">
                  <Button onClick={clearSignature} variant="outline">Limpar</Button>
                  <Button onClick={confirmSignature} className="glow-lime">Confirmar Assinatura</Button>
                </div>
                {signaturePreview && (
                  <div className="mt-4 glass rounded-lg p-3">
                    <p className="text-sm text-muted-foreground mb-2">Assinatura capturada:</p>
                    <img src={signaturePreview} alt="Assinatura" className="max-w-full border border-border rounded" />
                  </div>
                )}
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Assinante (R9):</strong> {EVANDRO_NAME} — {EVANDRO_TITLE}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Logo Upload */}
              <div className="glass-strong rounded-xl p-6" data-aos="fade-left">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-primary" />
                  Logotipo R9
                </h3>
                <div className="space-y-4">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="text-sm"
                  />
                  <div className="glass rounded-lg p-4 h-32 flex items-center justify-center bg-background">
                    {logoPreview ? (
                      <img src={logoPreview} alt="Logo" className="max-w-full max-h-full object-contain" />
                    ) : (
                      <div className="text-5xl font-bold text-gradient">R9</div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    O logo será embutido no documento e salvo localmente
                  </p>
                </div>
              </div>

              {/* Info Card */}
              <div className="glass-strong rounded-xl p-6" data-aos="fade-left" data-aos-delay="100">
                <h3 className="text-lg font-bold mb-4">Validade da Proposta</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data da proposta:</span>
                    <span className="font-semibold">{new Date(dataProposta).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Validade até:</span>
                    <span className="font-semibold">{getValidityDate()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Prazo de execução:</span>
                    <span className="font-semibold">{prazo} dias úteis</span>
                  </div>
                  <div className="pt-3 border-t border-border/50">
                    <div className="text-muted-foreground mb-1">Valor Total:</div>
                    <div className="text-2xl font-bold text-gradient">R$ {money(calcTotal())}</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3" data-aos="fade-left" data-aos-delay="200">
                <Button onClick={downloadProposta} className="w-full glow-lime" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Baixar Proposta (.docx)
                </Button>
                <Button onClick={clearAll} variant="outline" className="w-full">
                  <Trash2 className="w-5 h-5 mr-2" />
                  Limpar Tudo
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Dados salvos automaticamente no dispositivo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
